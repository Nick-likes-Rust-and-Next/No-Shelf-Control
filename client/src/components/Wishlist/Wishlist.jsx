import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ExpandMore, Star } from "@mui/icons-material/";

function Wishlist() {
  return (
    <Grid2 lg={12}>
      <Accordion sx={{ bgcolor: "whitesmoke" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" align="center" fontWeight={600} padding={2}>
            Wishlist
            <Star sx={{ mx: 2, color: "gold" }}/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <Box>
              <Typography variant="body1" align="center">
                Book
              </Typography>
              <Typography variant="body1" align="center">
                Author
              </Typography>
              <img
                src="/images/content.jpg"
                height={200}
                weight={200}
                style={{ borderRadius: 5 }}
              />
            </Box>
            <Box>
              <Typography variant="body1" align="center">
                Book
              </Typography>
              <Typography variant="body1" align="center">
                Author
              </Typography>
              <img
                src="/images/content.jpg"
                height={200}
                weight={200}
                style={{ borderRadius: 5 }}
              />
            </Box>
            <Box>
              <Typography variant="body1" align="center">
                Book
              </Typography>
              <Typography variant="body1" align="center">
                Author
              </Typography>
              <img
                src="/images/content.jpg"
                height={200}
                weight={200}
                style={{ borderRadius: 5 }}
              />
            </Box>
            <Box>
              <Typography variant="body1" align="center">
                Book
              </Typography>
              <Typography variant="body1" align="center">
                Author
              </Typography>
              <img
                src="/images/content.jpg"
                height={200}
                weight={200}
                style={{ borderRadius: 5 }}
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Grid2>
  );
}

export default Wishlist;
