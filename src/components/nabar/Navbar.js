import styled from "@emotion/styled";
import { AppBar, Toolbar, Box } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <Box>
          <Facebook />
          <Twitter />
          <Instagram />
        </Box>
        <Box>Menu</Box>
        <Box>Social</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
