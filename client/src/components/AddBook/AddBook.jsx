import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useQuery } from "@apollo/client";
import { QUERY_BOOK } from "../../utils/queries";
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

        await getBook({ variables: { title: "Hobbit" } });
        if (loading) {
            console.log("loading");
        }
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
        }
        // console.log(data);
        // try {
        //     // add mutation here
        //     const mutationResponse = await addBook({
        //         variables: {
        //             title,
        //         },
        //     });
        // } catch (err) {
        //     console.log(err);
        // }

        // not working, needs to close modal when form is submitted
        // onClose;
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
                                onChange={(e) => setTitle(e.target.value)}
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
