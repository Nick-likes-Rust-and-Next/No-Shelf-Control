import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Dashboard from "./pages/Dashboard/dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Homepage from "./pages/Homepage/homepage";

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
        <Routes>
          <Route path="/" element={<Layout themeSwitch={changeTheme}/>}>
            <Route index element={<Homepage />}/>
          </Route>
          <Route path="/dashboard" element={<Layout themeSwitch={changeTheme} />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
