import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function Posters() {
  return (
    <Grid container spacing={12}>
      <Grid>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
