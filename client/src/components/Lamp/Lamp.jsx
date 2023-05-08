import { Switch } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Lamp() {
  return (
    <Grid container width={250} height={350}>
      <img src="/images/lamp.png" width={250} height={350} />
      <Switch
        defaultChecked
        sx={{ opacity: 0.5, rotate: "-90deg", left: 97, bottom: 35 }}
      />
    </Grid>
  );
}

export default Lamp;
