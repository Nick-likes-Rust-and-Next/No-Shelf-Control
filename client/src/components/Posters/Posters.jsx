import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";


export default function Posters() {
  return (
    <Box display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"}>

        <Card sx={{ maxWidth: 200, mx:5, my: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width='120'
              image="/images/content.jpg"
              alt="featured book"
            />
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200, mx:5, my: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width='120'
              image="/images/content.jpg"
              alt="featured book"
            />
          </CardActionArea>
        </Card>
 
        <Card sx={{ maxWidth: 200, mx:5, my: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width='120'
              image="/images/content.jpg"
              alt="featured book"
            />
          </CardActionArea>
        </Card>

    </Box>
  );
}
