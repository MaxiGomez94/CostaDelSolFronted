import React, { useState } from "react";
import NavDrower from "./NavDrower";
import { Button, Drawer, AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';

const NavMenu = ({ linksDelNavbar }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "darkblue" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            Logo
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, m: "auto"}}>
            {linksDelNavbar.map((item) => (
              <Button
                color="inherit"
                component={NavLink}
                to={item.path}
                key={item.title}
                size="small"
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavDrower linksDelNavbar={linksDelNavbar} setOpen={setOpen} />
      </Drawer>
    </div>
  );
};

export default NavMenu;
