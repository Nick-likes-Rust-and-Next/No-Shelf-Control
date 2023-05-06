import { useState } from "react";
import Wall from "./components/Wall/Wall";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";

function App() {
  return (

      <Box  sx={{
        backgroundImage: `url("/images/wallpaper.jpeg")`,
        backgroundSize: "fill"
      }}>
        <Navbar />
        <Wall />
        <Bookshelf />
      </Box>

  );
}

export default App;
