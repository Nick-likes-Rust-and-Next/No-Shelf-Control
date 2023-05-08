import Corkboard from "../Corkboard/Corkboard";
import Posters from "../Posters/Posters";
import { Box, Typography } from "@mui/material";

function Wall() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-evenly"}
      flexWrap={"wrap"}
      sx={{ paddingTop: 5 }}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          variant="h4"
          m={2}
          align="center"
          color={"white"}
          sx={{ border: "1px solid white" }}
        >
          My Settings
        </Typography>

        <Corkboard />
      </Box>
      <Box>
        <Typography
          variant="h4"
          m={2}
          align="center"
          color={"white"}
          sx={{ border: "1px solid white" }}
        >
          Featured Books
        </Typography>
        <Posters />
      </Box>
    </Box>
  );
}

export default Wall;
