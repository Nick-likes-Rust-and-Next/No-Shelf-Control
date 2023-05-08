// here each book will be mapped from the MongoDB bookshelf for the user who is logged in
import { Box, Typography } from "@mui/material";

function Book({ book }) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return (
        // this is ratchet, trust me, I'm aware
        <Box
            my={20}
            px={5}
            mx={-10}
            sx={{
                width: "300px",
                height: "60px",
                minWidth: "195px",
                backgroundColor: bgColor,
                rotate: "-90deg",
                color: "white",
                border: "2px Solid black",
                borderRadius: "6px",
                transition: "all .2s ease-in-out",
                "&:hover": { transform: "scale(1.5)" }
            }}
        >
            <Typography>{book.title}</Typography>
            <Typography>{book.author}</Typography>
            {/* <img src={book.image} /> */}
            {/* each book will have an on click and some other fancy stuff so you can pull it from the shelf and see maybe a comment and some stats */}
        </Box>
    );
}

export default Book;
