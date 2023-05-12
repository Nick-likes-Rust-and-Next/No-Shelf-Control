import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Autocomplete, Button, TextField } from "@mui/material";
import { QUERY_BOOK, QUERY_BOOKS } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";

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
    const [getBook, { loading, error, data }] = useLazyQuery(QUERY_BOOK);

    const handleFormSubmit = async (e, onClose) => {
        e.preventDefault();
        console.log(bookTitle);

       const {data} = await getBook({ variables: { title: bookTitle } });
        if (loading) {
            console.log("loading");
        }
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
        }
        // add mutation to add the book to the users list of books
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
                            {/* <Autocomplete
                                id="book-search"
                                freeSolo
                                options={books.map((option) => option.title)}
                                renderInput={(params) => (
                                    <TextField {...params} label="Book Title" />
                                )}
                            /> */}
                            <TextField
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setTitle(e.target.value)
                                    console.log(bookTitle)
                                }}
                                value={bookTitle}
                                id="outlined-basic"
                                label="Book Title"
                                variant="outlined"
                            />
                            <Button type="submit" variant="outlined">
                                Add Book
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default AddBook;
