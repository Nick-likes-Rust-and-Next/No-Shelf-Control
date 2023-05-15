import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
    Autocomplete,
    Button,
    TextField,
    Backdrop,
    Box,
    Modal,
    Fade,
} from "@mui/material";
import { QUERY_BOOK, QUERY_BOOKS } from "../../utils/queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_BOOK } from "../../utils/mutations";

const books = [];

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
function AddBook({ open, onClose }) {
    const [bookTitle, setTitle] = React.useState("");
    const [bookResults, setBookResults] = React.useState([]);

    const [getBook, { loading, error, data }] = useLazyQuery(QUERY_BOOK);
    const [updateBookList] = useMutation(ADD_BOOK);
    const user = Auth.getProfile()?.data;

    const handleFormSubmit = async (e, onClose) => {
        e.preventDefault();
        console.log(bookTitle);

        const { data, loading, error } = await getBook({
            variables: { title: bookTitle },
        });
        if (loading) {
            console.log("loading");
        }
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setBookResults(data.book);
        }
    };
    // add mutation to add the book to the users list of books

    const updateUserBooks = async (book) => {
        let id = user._id;
        let bookID = book._id;
        await updateBookList({
            variables: {
                id,
                bookID,
            },
        });
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        Enter a book title:
                        <form onSubmit={handleFormSubmit}>
                            <Box>
                                <TextField
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        setTitle(e.target.value);
                                        console.log(bookTitle);
                                    }}
                                    value={bookTitle}
                                    id="outlined-basic"
                                    label="Book Title"
                                    variant="outlined"
                                />
                                <Button type="submit" variant="outlined">
                                    Add Book
                                </Button>
                            </Box>
                            {bookResults.length > 0 && (
                                <>
                                    {bookResults.map((each) => (
                                        // this onclick will run a mutation
                                        <Button
                                            onClick={() =>
                                                updateUserBooks(each)
                                            }
                                        >
                                            {each.title}
                                        </Button>
                                    ))}
                                </>
                            )}
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default AddBook;
