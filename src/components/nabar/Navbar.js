import styled from "@emotion/styled";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
display: "flex",
gap :10,

});

const MenuBox = styled(Box)({
    display: "flex",
    gap :30,
    
    })
const Navbar = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <StyledBox>
          <Facebook />
          <Twitter />
          <Instagram />
        </StyledBox>
        <MenuBox>
<Typography>Home</Typography>
<Typography>Products</Typography>
<Typography>Portfolio</Typography>
<Typography>Blog</Typography>
<Typography>Contact Us</Typography>

       </MenuBox>
        <Box>Social</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
