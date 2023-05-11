import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Homepage from "./pages/Homepage/homepage";
import Login from "./pages/Login/login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import CreateAccount from "./pages/CreateAccount/createaccount";

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
                        <Route
                            path="/"
                            element={<Layout themeSwitch={changeTheme} />}
                        >
                            <Route index element={<Homepage />} />
                        </Route>
                        <Route
                            path="/login"
                            element={<Layout themeSwitch={changeTheme} />}
                        >
                            <Route index element={<Login />} />
                        </Route>
                        <Route
                            path="/dashboard"
                            element={<Layout themeSwitch={changeTheme} />}
                        >
                            <Route index element={<Dashboard />} />
                        </Route>
                        <Route
                            path="/createaccount"
                            element={<Layout themeSwitch={changeTheme} />}
                        >
                            <Route index element={<CreateAccount />} />
                        </Route>
                    </Routes>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
