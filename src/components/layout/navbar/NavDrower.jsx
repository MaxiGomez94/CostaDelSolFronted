import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavDrower = ({ linksDelNavbar, setOpen }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {linksDelNavbar.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavDrower;
