import { Box } from "@mui/material";
import Book from "../Book/Book";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useQuery } from "react-query";

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
  const getBooks = async () => {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes/?q=beyond+good+and+evil"
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery("getBooks", getBooks);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {/* some sort of component for the infinite scroll */}
      {/* this will pass each book of the user as a prop and create a book component for each */}
      {userBooks.map((book) => (
        <Book key={book.title} book={book} />
      ))}
      {/* some sort of component for the infinite scroll */}
    </Box>
  );
}

export default BookList;
