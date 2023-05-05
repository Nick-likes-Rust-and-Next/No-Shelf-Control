import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import BookList from "./components/BookList/BookList";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Bookshelf />
        </>
    );
}

export default App;
