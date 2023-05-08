import { useState } from "react";
import Wall from "./components/Wall/Wall";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>

      // <Box  sx={{
      //   backgroundImage: `url("/images/wallpaper.jpeg")`,
      //   backgroundSize: "fill"
      // }}>
      //   <Navbar />
      //   <Wall />
      //   <Bookshelf />
      // </Box>

  );
}

export default App;
