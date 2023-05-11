import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./booklist.scss";
import { Pagination } from "swiper";

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
        title: "hitchhiker's guide to the galaxy",
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
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
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
                }
            }}
            pagination={{
                clickable: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {sortedBooks.map((book) => {
                // This will probably be placed elsewhere so each book doesnt change its color on every reload ///////////////
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                return (
                    // should probably be tweaked to look a little nicer ////////////////////////////
                    // clean up css ////////////////////////////////////////////////////////////////
                    <SwiperSlide
                        key={book.title}
                        style={{ background: bgColor }}
                    >
                        <Box className="bookBox">
                            <Typography className="bookTitle">
                                {book.title}
                            </Typography>
                        </Box>
                        <Box className="authorBox">
                            <Typography className="bookAuthor">
                                {book.author}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default BookList;
