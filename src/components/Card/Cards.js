import { Box, CardContent, CardMedia,Typography } from '@mui/material'
import React from 'react'

const Cards = ({cardImage} ) => {
  return (
    <Box>
 <CardMedia
        component="img"
        height="100%"
        image={cardImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" align="center" color="tomato"component="div">
          Perfumes
        </Typography>
        <Typography gutterBottom variant="h5" align="center"component="div">
          Wearing this will make everyone love you
        </Typography>

        <Typography gutterBottom variant="body2" align="center"component="div">
          It's women's  love
        </Typography>



        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

    </Box>




  )
}

export default Cards