import styled from "@emotion/styled";
import { AppBar, Toolbar, Box } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
display: "flex",
gap :10

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
        <Box>Menu</Box>
        <Box>Social</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
