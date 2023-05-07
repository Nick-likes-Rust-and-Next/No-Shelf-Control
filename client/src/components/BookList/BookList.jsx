import { Box } from "@mui/material";
import Book from "../Book/Book";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

let userBooks = [
    {
        title: "Divine Comedy34343",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
    {
        title: "Divine Comedy4434",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
    {
        title: "Divine Comedy234234",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
    {
        title: "Divine Comedy234234",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
    {
        title: "Divine Comedy32423",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
    {
        title: "Divine Comedy1234",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
];

function BookList() {
    return (
        <Box display={"flex"} justifyContent={"center"}>
            {/* some sort of component for the infinite scroll */}
            {/* this will pass each book of the user as a prop and create a book component for each */}
            {userBooks.map((book) => (
                    <Book key={book.title} book={book}/>
            ))}
            {/* some sort of component for the infinite scroll */}
            </Box>
    );
}

export default BookList;
