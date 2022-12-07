import React from 'react'
import Hero from '../hero/Hero'
import Categories from '../category/Categories'
import Recents from '../recents/Recents'
import { Box, Container,Stack } from '@mui/material'




const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
       <Categories/>
       <hr/>
      <Stack direction={row} spacing={8}  mt={8}>
     <Box flex={3} sx={{ padding:"18px  100px 100px 100px"}}>
        <Recents/>
     </Box>
     <Box>
  Right

     </Box>
      </Stack>
      </Container>

    </Box>
  )
}

export default Home