import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard/dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Layout themeSwitch={changeTheme} />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
