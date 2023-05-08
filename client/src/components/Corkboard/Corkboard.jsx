import { Box } from "@mui/material";

function Corkboard() {
  return (
    <Box sx={{ width: 365, height: 213, transition: "all .2s ease-in-out",
    "&:hover": { boxShadow: "0 0 15px rgb(255, 255, 0)" } }}>
      <img src="/images/Corkboard.png" />
    </Box>
  );
}

export default Corkboard;
