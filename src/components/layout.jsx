import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const navItems = ["Home", "About", "Contact"];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />
      <Box component="main" sx={{ p: 3, flexGrow: 1, width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
