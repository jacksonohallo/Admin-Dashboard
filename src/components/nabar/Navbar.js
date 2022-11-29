import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const StyledToolbar= styled(Toolbar)({
display: "flex",
justifyContent: "space-between"

})


const Navbar = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <Box>Navbar</Box>
        <Box>Menu</Box>
        <Box>Social</Box>
        </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
