import React from 'react'
import {Box,Stack,styled, Typography} from "@mui/material"
import kidImage  from  '../../static/kids.jpg'
import womenImage from '../../static/women.jpg'
import menImage  from '../../static/men.jpg'


const StyledBox=styled(Box)({
height: 200,
width: "100%",
cursor: "pointer",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
backgroundPosition: "center center"
});

const StyledTypography=styled(Typography)({
 margin: "25px 50px 25px 50px",
background: "white",
opacity: "0.8"
})

const Categories = () => {
  return (
<Box>
<Stack direction={{xs:"column", sm:"row"}}
 spacing={{xs:1, sm:2, md:4}}
  mt={5}>
   <StyledBox sx={{backgroundImage:`url(${kidImage})`}}>
    <StyledTypography align="center" varient="h3">Kid</StyledTypography></StyledBox> 
   <StyledBox sx={{backgroundImage:`url(${womenImage})` }}>
    <StyledTypography align="center" varient="h3">Men</StyledTypography></StyledBox> 
   <StyledBox sx ={{background:`url(${menImage})`}}>
   <StyledTypography align="center" varient="h3">Women</StyledTypography></StyledBox> 
 
</Stack>

    </Box>
  )
}

export default Categories