import { Box, Typography } from "@mui/material";
import BookList from "../BookList/BookList";

const Bookshelf = () => {
  return (
    <Box marginTop={10} display={"flex"} flexDirection={"column"}>
      <Typography
        variant="h4"
        m={2}
        align="center"
        color={"white"}
      >
        The Shelf
      </Typography>

      <BookList />
    </Box>
  );
};

export default Bookshelf;
