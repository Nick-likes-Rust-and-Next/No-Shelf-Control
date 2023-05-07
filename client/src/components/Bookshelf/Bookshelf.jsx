import { Box } from "@mui/material";
import BookList from "../BookList/BookList";

const Bookshelf = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} marginTop={10}>
            <BookList />
        </Box>
    );
};

export default Bookshelf;
