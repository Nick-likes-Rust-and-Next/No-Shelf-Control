import {
  Avatar,
  Box,
  Button,
  Typography,
  Tooltip,
  Card,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./dashboard.scss";
import { faBacon, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import React from "react";
import AddBook from "../../components/AddBook/AddBook";
import { Settings } from "@mui/icons-material/";
import Wishlist from "../../components/Wishlist/Wishlist";

function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Placeholder content for the starred books that user will choose to feature from their collection
  const starredBooks = ["book1", "book2", "book3"];

  return (
    <div className="container dashboard-container">
      <Grid2 container spacing={5} className="profile-container">
        <Grid2 xs={12}>
          <Card sx={{ bgcolor: "#99d9ea", borderRadius: 5 }}>
            <Box display="flex" flexWrap={"wrap"}>
              <Box padding={2}>
                <Avatar
                  alt="profile picture"
                  src=""
                  sx={{ bgcolor: "#ff00ff", width: 75, height: 75 }}
                ></Avatar>
              </Box>
              <Grid2 md={8} justifySelf={"flex-start"}>
                <Typography
                  align="center"
                  variant="h5"
                  fontWeight={600}
                  color="black"
                  fontFamily={"Bukhari Script"}
                  fontSize={27}
                  padding={3}
                  paddingLeft={2}
                  sx={{ alignSelf: "flex-end" }}
                >
                  Username
                </Typography>
              </Grid2>
              <Grid2>
                <Settings
                  sx={{
                    fontSize: 30,
                    color: "#707070",
                    transition: "all .3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.5)",
                      cursor: "grab",
                    },
                  }}
                />
              </Grid2>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              flexWrap={"wrap"}
            >
              <Tooltip title="Bacon Badge!">
                <FontAwesomeIcon
                  id="faBacon"
                  icon={faBacon}
                  color="black"
                  fontSize={40}
                  style={{ padding: 10 }}
                />
              </Tooltip>
              <Tooltip title="Currently reading a new Book!">
                <FontAwesomeIcon
                  id="faBacon"
                  icon={faBookOpen}
                  color="black"
                  fontSize={40}
                  style={{ padding: 10 }}
                />
              </Tooltip>
              <FontAwesomeIcon
                id="faBacon"
                icon={faBacon}
                color="black"
                fontSize={40}
                style={{ padding: 10 }}
              />
              <FontAwesomeIcon
                id="faBacon"
                icon={faBookOpen}
                color="black"
                fontSize={40}
                style={{ padding: 10 }}
              />
              <FontAwesomeIcon
                id="faBacon"
                icon={faBookOpen}
                color="black"
                fontSize={40}
                style={{ padding: 10 }}
              />
              <FontAwesomeIcon
                id="faBacon"
                icon={faBookOpen}
                color="black"
                fontSize={40}
                style={{ padding: 10 }}
              />
              <FontAwesomeIcon
                id="faBacon"
                icon={faBookOpen}
                color="black"
                fontSize={40}
                style={{ padding: 10 }}
              />
            </Box>
          </Card>
        </Grid2>
        <Grid2
          xs={3}
          sx={{
            bgcolor: "#707070",
            marginLeft: 2.4,
            marginRight: 3,
            borderRadius: 5,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Typography
              variant="h4"
              align="center"
              padding={2}
              fontWeight={600}
              fontSize={25}
              color="white"
              fontFamily={"Bukhari Script"}
              sx={{ wordWrap: "normal" }}
            >
              Currently Reading
            </Typography>
            <Box
              sx={{
                borderRadius: 5,
                height: 190,
                transition: "all .3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-15px)",
                  boxShadow: "0px 8px 10px black",
                },

                margin: 1.5,
              }}
            >
                <img
                  src="/images/content.jpg"
                  height={200}
                  style={{ borderRadius: 5 }}
                />
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={8} sx={{ bgcolor: "#707070", borderRadius: 5 }}>
          <Typography
            variant="h4"
            align="center"
            padding={2}
            fontWeight={600}
            color="white"
            fontFamily={"Bukhari Script"}
          >
            Favorite Books
          </Typography>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            {starredBooks.map((book) => (
              // needs key
              <Box
                key={book}
                sx={{
                  borderRadius: 5,
                  height: 190,
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-15px)",
                    boxShadow: "0px 8px 10px black",
                  },

                  margin: 1.5,
                }}
              >
                <img
                  src="/images/content.jpg"
                  height={200}
                  style={{ borderRadius: 5 }}
                />
              </Box>
            ))}
          </Box>
        </Grid2>
        <Wishlist />
      </Grid2>

      <div className="bookshelf-container">
        <Box className="heading">
          <h1>BOOKS</h1>
          <Button
            className="bookButton"
            onClick={handleOpen}
            variant="contained"
          >
            Add Book +
          </Button>
        </Box>
        <AddBook open={open} onClose={handleClose} />
        <Bookshelf />
      </div>
    </div>
  );
}

export default Dashboard;
