import { Switch } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Lamp() {
  return (
    <>
      <Grid>
        <img src="/images/lamp.png" width={250} height={350} />
        <Switch
          defaultChecked
          sx={{ opacity: 0.5, rotate: "-90deg", right: 152 }}
        />
      </Grid>
    </>
  );
}

export default Lamp;
