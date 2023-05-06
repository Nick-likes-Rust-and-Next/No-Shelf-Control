import Corkboard from "../Corkboard/Corkboard";
import Posters from "../Posters/Posters";
import Lamp from "../Lamp/Lamp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Wall() {
  return (
    <Grid2 container spacing={2}>
      <Grid2>
        <Corkboard />
      </Grid2>
      <Grid2>
        <Posters />
      </Grid2>
      <Grid2>
        <Lamp />
      </Grid2>
    </Grid2>
  );
}

export default Wall;
