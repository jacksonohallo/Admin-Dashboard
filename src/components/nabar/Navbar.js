import styled from "@emotion/styled";
import { AppBar, Toolbar, Box, Typography, InputBase, Menu, MenuItem } from "@mui/material";
import React,{useState} from "react";
import { Facebook, Instagram, Twitter, Menu as MenuIcon } from "@mui/icons-material";

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

const SearchBox = styled(Box)({
  display: "flex",
  gap: 5,
});
const MenuItems = [
  { Name: "Home", Link: "#" },
  { Name: "Products", Link: "#" },
  { Name: "Portfolio", Link: "#" },
  { Name: "Blog", Link: "#" },
  { Name: "Contact Us", Link: "#" },
];



const Navbar = () => {
  const [open,setOpen] = useState(false)

  return (
    <AppBar sx={{ background: "black", position:"static" }}>
      <StyledToolbar>
        <StyledBox>
          <Facebook />
          <Twitter />
          <Instagram />
        </StyledBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="search..." sx={{ color: "white" }} />
          <MenuIcon sx={{ color: "white", display: { xs: "block", sm: "block", md: "none" } }} 
          
          onClick={()=>setOpen(!open)}
          />
          
        </SearchBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
     
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <Box style={{ width:350, height:"90vh"   }}>

      {MenuItems.map((item) => (
            <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </MenuItem>
          ))}

      </Box>

      </Menu>


    </AppBar>
  );
};

export default Navbar;
