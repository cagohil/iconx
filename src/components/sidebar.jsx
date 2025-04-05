import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import logo from "../assests/iconX.png";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Quality & Machinery", path: "/quality-machinery" },
  { name: "Contact", path: "/contact" },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle, container }) => {
  const theme = useTheme();
  const location = useLocation();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: theme.palette.primary.main }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ height: 65, width: "auto", marginRight: 10 }}
      />
      <Divider />
      <List>
        {navItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.second,
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      color: isActive ? "black" : theme.palette.primary.main, // ✅ Active item black
                      fontWeight: isActive ? 700 : 400, // Bold only when active
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Sidebar;
