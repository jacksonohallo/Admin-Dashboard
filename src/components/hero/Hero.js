import { Box, Typography } from  "@mui/material";
import React from 'react'
// import HeroImage from "../../static/HeroImage.jpg"
import HeroImage from "../../static/HeroImage.jpg";
const Hero = () => {
  return (
    
    <Box>
<Typography varient="h3" align="center" sx={{fontWeight:900}}>
FASHION<b style={{color:"red"}}>BLOG</b>
</Typography>
<Typography varient="body2" align="center"sx={{fontWeight:100}}>
We make you look better for you
</Typography>
    <Box sx={{
    backgroundImage: `url(${HeroImage})`,
    // backgroundImage: `url(${HeroImage})`,
    BackgroundColor:"black",
    BackgroundPosition:"center",
    BackgroundRepeat:"no-repeat",
    BackgroundSize:"cover",
    height:600,
    width:"100%"
    

    }}>


    </Box>



    </Box>



  )
}

export default Hero