import { Box } from "@mui/material";
import Lamp from "../Lamp/Lamp";

function Navbar(props) {
  return (
    <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
      <img src="/images/Banner.png" height={100} alt="no shelf control" />
      <Lamp lampSwitch={props.lampSwitch}/>
    </Box>
  );
}

export default Navbar;
