import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import premiumBlade from "../../../assests/icon-blade.png";

const highlights = [
  "Uniform Hardness : 48 ± 2 HRC",
  "Italian grade boron steel (30mncrb5) with added chemical elements like vanadium, copper, aluminium, nickel & titanium",
  "Added chemical ensures the Icon Premium Blades have optimal elasticity & resistance to shocks & strains",
  "Shot blasted & black powder coated",
  "Sweep back angle for minimal load on tractor",
  "Hot - hardened & tempered",
  "Packed in graphic designed boxes for easy handling",
  "Readily available in two common sizes 14x57mm and 14x46mm",
  "No sharp edges & rounded corners",
  "Made for tough soil conditions",
  "Made as per international standards",
];

const PremiumQuality = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", my: 2 ,pt:5}}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* ✅ Left Section - Image */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h6">PREMIUM QUALITY</Typography>
          <Typography variant="h4" fontWeight="bold" color="primary.main">
            ROTARY TILLER BLADE
          </Typography>
          <Box
            component="img"
            src={premiumBlade}
            alt="icon-blade"
            sx={{ height: 300, mt: 2 }}
          />
        </Grid>

        {/* ✅ Right Section - Highlights */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" sx={{ mx: 2, color:"primary.main" }}>
            HIGHLIGHTS
          </Typography>
          <List>
            {highlights.map((highlight, index) => (
              <ListItem
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <ListItemIcon>
                  <ArrowRightAltIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <Typography variant="body1">{highlight}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PremiumQuality;
