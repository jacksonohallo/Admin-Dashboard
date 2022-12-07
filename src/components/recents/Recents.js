import { Box,Grid} from "@mui/material";
import React from "react";
import cardImage from "../../static/image3.jpg";
import Cards from "../Card/Cards";

const Recents = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} sm={12}>
     <Cards cardImage={cardImage}  />
     </Grid>
        <Grid item sx={{ backgroundColor: "tomato" }}>
          item2
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
