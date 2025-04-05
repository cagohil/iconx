import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Divider, Grid, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Quality & Machinery", path: "/quality-machinery" },
  { name: "Contact us", path: "/contact-us" },
];

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          py: 4,
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
          <Grid container spacing={3} justifyContent="center">
            {/* ✅ Left Section - About */}
            <Grid item xs={12} sm={4} textAlign="center">
              {/* <Box component="img" src={logo} alt="Logo" sx={{ width: 100, mb: 2 }} /> */}
              <Typography variant="body1">
                ICON BLADE INDUSTRIES is the best manufacturer of rotary tiller
                blades and provides high-quality services.
              </Typography>
            </Grid>

            {/* ✅ Center Section - Useful Links */}
            <Grid item xs={12} sm={4} textAlign="center" x>
              <Typography variant="h6" gutterBottom>
                Useful Links
              </Typography>
              <Divider
                sx={{ bgcolor: "#fff", width: "50%", mx: "auto", mb: 2 }}
              />
              {menuItems.map((item, index) => (
                <Typography key={index} variant="body2" sx={{ my: 1 }}>
                  <Link
                    to={item.path}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* ✅ Right Section - Contact Info */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom textAlign="center">
                Connect with us
              </Typography>
              <Divider
                sx={{ bgcolor: "#fff", width: "50%", mx: "auto", mb: 2 }}
              />
              <Typography
                variant="body2"
                display="flex"
                alignItems="center"
                justifyContent="start"
              >
                <LocationOnIcon sx={{ mr: 1 }} />
                35, Arise Industrial Park, Dhanot, Chhatral, Gandhinagar,
                Gujarat - 382729
              </Typography>
              <Typography
                variant="body2"
                display="flex"
                alignItems="center"
                justifyContent="start"
                sx={{ mt: 1 }}
              >
                <PhoneIcon sx={{ mr: 1 }} />
                +91 90336 64653
              </Typography>
              <Typography
                variant="body2"
                display="flex"
                alignItems="center"
                justifyContent="start"
                sx={{ mt: 1 }}
              >
                <EmailIcon sx={{ mr: 1 }} />
                iconX@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* ✅ Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          bgcolor: theme.palette.primary.third,color:theme.palette.secondary.main
        }}
      >
        <Typography variant="body2">
          Copyright &copy; 2025 ICON BLADE INDUSTRIES. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
