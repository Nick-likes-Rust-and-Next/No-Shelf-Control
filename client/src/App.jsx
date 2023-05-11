import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Dashboard from "./pages/Dashboard/dashboard";
import Homepage from "./pages/Homepage/homepage";
import Login from "./pages/Login/login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({

  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {

  const token = sessionStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  const [mode, setMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  const changeTheme = () => {
    setMode(!mode);
    console.log(theme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Routes>

            <Route path="/login" element={<Layout themeSwitch={changeTheme} />}>
              <Route index element={<Login />}/>
            </Route>

           
              <Route path="/" element={<Layout themeSwitch={changeTheme}/>}>
                <Route index element={<Homepage />}/>
              </Route>

              <Route path="/dashboard" element={<Layout themeSwitch={changeTheme} />}>
                <Route index element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
              </Route>
            

          </Routes>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
