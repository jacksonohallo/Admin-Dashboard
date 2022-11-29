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
  gap: 10,
});

const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
});
const MenuItems = [
  { Name: "Home", Link: "#" },
  { Name: "Products", Link: "#" },
  { Name: "Portfolio", Link: "#" },
  { Name: "Blog", Link: "#" },
  { Name: "Contact Us", Link: "#" },
];
const Navbar = () => {
  return (
    <AppBar sx={{background:"black"}}>
      <StyledToolbar>
        <StyledBox>
          <Facebook />
          <Twitter />
          <Instagram />
        </StyledBox>
        <MenuBox>
          {MenuItems.map((item) => (
            <Typography sx={{cursor:"pointer", fontSize:"14px"}}>
                
                {item.Name}
            
            </Typography>
          ))}
        </MenuBox>
        <Box>Social</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
