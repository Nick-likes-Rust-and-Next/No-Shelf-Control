import { useState } from "react";
import Wall from "./components/Wall/Wall";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url("/images/wallpaper.jpeg")`,
          backgroundSize: "fill",
        }}
      >
        <Navbar lampSwitch={changeTheme} />
        <Wall />
        <Bookshelf />
      </Box>
    </ThemeProvider>
  );
}

export default App;
