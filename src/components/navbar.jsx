import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../assests/iconBgR.png";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Quality & Machinery", path: "/quality-machinery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* ✅ Logo on the Left */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: 65, width: 130, marginRight: 10 }}
          />
        </Box>

        {/* ✅ Navigation Items on the Right (Desktop View) */}
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive ? "black" : theme.palette.primary.main,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>

        {/* ✅ Menu Icon on the Right (Mobile View) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end" // Moves it to the right
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
