// here each book will be mapped from the MongoDB bookshelf for the user who is logged in

function Book() {
    return (
        <>
            <div>book title</div>
            <div>book author</div>
            <div>book img</div>
            <div>book pages?</div>
            {/* each book will have an on click and some other fancy stuff so you can pull it from the shelf and see maybe a comment and some stats */}
        </>
    );
}

export default Book;
