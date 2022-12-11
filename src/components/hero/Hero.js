import { Box, Typography } from  "@mui/material";
import { flexbox } from "@mui/system";
import React from 'react'
import HeroImage from "../../static/HeroImage.jpg";
const Hero = () => {
  return (
    
    <Box>
<Typography varient="h3" align="center" sx={{fontWeight:900}}>
Abelard Enterprises<b style={{color:"red"}}>BLOG</b>
</Typography>
<Typography varient="body2" align="center"sx={{fontWeight:100}}>
We make you look better for you
</Typography>
    <Box sx={{
    backgroundImage: `url(${HeroImage})`,
    backgroundColor:"black",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:600,
    width:"100%",
    display:"flex",
    justifyContent:"center"
    }}>
    

 <Box sx={{width:{xs:"100%", sm: "50%", md:"40%"},
 
  padding:{ xm:3 , sm: 2, md:20 } }}>
 <Box sx={{backgroundColor:"white", opacity:"0.8"}}>


<Typography varient="h6" color="tomato" align="center" pt={8} >
   Trending Styles
   
   </Typography>
   <Typography varient="h6" align="center">
       Life is boring without fashion!
   </Typography>
   <Typography varient="body1" align="center" pb={8}>
  We love to change your style honey
   </Typography>

   </Box>



</Box>   




    </Box>



    </Box>



  )
}

export default Hero