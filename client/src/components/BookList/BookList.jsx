import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./booklist.scss";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import React from "react";
import ExpandBook from "../ExpandBook/ExpandBook";

let userBooks = [
    {
        title: "Divine Comedy",
        author: "Dante Alighieri",
        image: "/images/content.jpg",
    },
    {
        title: "Seconds",
        author: "Bryan Lee O'Malley",
        image: "/images/content.jpg",
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        image: "/images/content.jpg",
    },
    {
        title: "Illidan",
        author: "William King",
        image: "/images/content.jpg",
    },
    {
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        image: "/images/content.jpg",
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J. K. Rowling",
        image: "/images/content.jpg",
    },
    {
        title: "Hitchhiker's guide to the galaxy",
        author: "Douglas Adams",
        image: "/images/content.jpg",
    },
    {
        title: "Life, the Universe and Everything",
        author: "Douglas Adams",
        image: "/images/content.jpg",
    },
    {
        title: "One Piece, Vol. 2: Romance Dawn",
        author: "Eiichiro Oda",
        image: "/images/content.jpg",
    },
    {
        title: "One Piece, Vol. 1: Romance Dawn",
        author: "Eiichiro Oda",
        image: "/images/content.jpg",
    },
    {
        title: "Bakemonogatari",
        author: "Nisio Isin",
        image: "/images/content.jpg",
    },
    {
        title: "Aeneid",
        author: "Virgil",
        image: "/images/content.jpg",
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        image: "/images/content.jpg",
    },
];

// Possible method to sort books on button press? /////////////////////////////////
// can be left as is or commented out ////////////////////////////////////////////
let sortedBooks = userBooks.sort((a, b) => a.title.localeCompare(b.title));

function BookList() {
    const [open, setOpen] = React.useState(false);
    const [book, setBook] = React.useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let shelfSize = userBooks.length >= 8;

    return (
        <Box>
            <ExpandBook open={open} onClose={handleClose} book={book} />
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                navigation={true}
                loop={shelfSize}
                // these look wack but I could not get them to work otherwise ///////////////////////////
                breakpoints={{
                    1: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {sortedBooks.map((each) => {
                    // This will probably be placed elsewhere so each book doesnt change its color on every reload ///////////////
                    // convert string to number so its the seed for math.random /////////////////
                    let theSlab = 0;
                    let titleArray = each.title.split(" ").join("").split("");
                    titleArray.forEach((each) => {
                        theSlab += each.charCodeAt(0);
                    });
                    let bgColor = "#" + theSlab.toString(16);
                    return (
                        // should probably be tweaked to look a little nicer ////////////////////////////
                        // clean up css ////////////////////////////////////////////////////////////////
                        <SwiperSlide
                            key={each.title}
                            style={{ background: bgColor }}
                            onClick={() => {
                                handleOpen();
                                setBook(each);
                            }}
                        >
                            <Box className="bookBox">
                                <Typography className="bookTitle">
                                    {each.title}
                                </Typography>
                            </Box>
                            <Box className="authorBox">
                                <Typography className="bookAuthor">
                                    {each.author}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Box>
    );
}

export default BookList;
