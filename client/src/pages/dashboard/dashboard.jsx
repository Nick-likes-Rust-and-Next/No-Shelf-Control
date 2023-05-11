import {
  Avatar,
  Box,
  Button,
  Typography,
  Tooltip,
  Paper,
  Card,
  CardActionArea,
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
  const starredBooks = ["book1", "book2", "book3", "book4"];

  return (
    <div className="container dashboard-container">
      <Grid2 container spacing={4} className="profile-container">
        {/* Profile pic and badges */}
        <Grid2 xs={4} sx={{ bgcolor: "grey" }}>
          <Card sx={{ bgcolor: "whitesmoke" }}>
            <Box
              sx={{
                padding: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="profile picture"
                src=""
                sx={{ bgcolor: "red", width: 100, height: 100 }}
              ></Avatar>

              <Typography
                align="center"
                variant="h6"
                color="black"
                fontWeight={600}
                padding={3}
              >
                Username
              </Typography>
              <Settings
                sx={{
                  marginBottom: 2,
                  fontSize: 30,
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.5)",
                    cursor: "grab",
                  },
                  alignSelf: "center",
                }}
              />
            </Box>
          </Card>
          <Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignContent={"space-between"}
            >
              <Typography
                align="center"
                variant="h6"
                color="black"
                fontWeight={600}
                padding={3}
              >
                Badges
              </Typography>
              <Paper
                elevation={24}
                sx={{
                  height: 400,
                  bgcolor: "whitesmoke",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <Tooltip title="Bacon Badge!">
                  <FontAwesomeIcon
                    id="faBacon"
                    icon={faBacon}
                    color="black"
                    fontSize={40}
                    style={{ padding: 15 }}
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
              </Paper>
            </Box>
          </Box>
        </Grid2>
        {/* Currently reading and featured books */}
        <Grid2 xs={8} sx={{ bgcolor: "silver" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
            <Typography
              variant="h5"
              align="center"
              padding={2}
              fontWeight={600}
              fontSize={25}
              sx={{ wordWrap: "normal" }}
            >
              Currently <br /> Reading
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
                  height={240}
                  style={{ borderRadius: 5 }}
                />
            </Box>
          </Box>

          <Box paddingTop={8}>
            <Typography
              variant="h5"
              align="center"
              padding={2}
              fontWeight={600}
            >
              Featured Books
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
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
