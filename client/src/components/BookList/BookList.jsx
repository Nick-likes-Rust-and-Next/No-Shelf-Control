import Book from "../Book/Book";

let userBooks = [];

function BookList() {
    return (
        <>
            {/* some sort of component for the infinite scroll */}
            {/* this will pass each book of the user as a prop and create a book component for each */}
            {userBooks.map((book) => {
                <Book key={isbn} book={book} />;
            })}
            {/* some sort of component for the infinite scroll */}
        </>
    );
}

export default BookList;
