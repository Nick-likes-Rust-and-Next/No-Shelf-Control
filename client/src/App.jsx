import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Corkboard from "./components/Corkboard/Corkboard";
import Posters from "./components/Posters/Posters";
import Grid from "@mui/material/Unstable_Grid2";
import Lamp from "./components/Lamp/Lamp";

function App() {

  return (
    <>
      <Navbar />
      <Grid container spacing={12}>
        <Grid>
          <Corkboard />
        </Grid>
        <Grid>
          <Posters />
        </Grid>
        <Lamp />
      </Grid>
    </>
  );
}

export default App;
