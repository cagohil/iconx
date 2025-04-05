import React from "react";
import LTypeBlade from "../../../assests/L-type.jpg";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LType = () => {
  return (
    <Box sx={{ my: 1 }}>
      <Typography variant="h4" align="center" fontWeight="bold">
        Product Details
      </Typography>

      {/* Using MUI Grid instead of Bootstrap classes */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {/* Image Section (Left) */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <img
            src={LTypeBlade}
            alt="L-Type Blade"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }}
          />
          <Typography variant="h5" fontWeight="bold" mt={3}>
            L-Type Blade
          </Typography>
        </Grid>

        {/* Characteristics Section (Right) */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#196CB5">
            Characteristics
          </Typography>

          <List>
            {[
              "Hardness: 44 ± 2 HRc. (boron steel)",
              "Hardness: 48 ± 2 HRc. (Special Grade boron steel)",
              "Integral hardening to avoid deformations and rupture.",
              "Precise & Uniform sharpening",
              "Large blade, high anti-wearing characteristic",
              "Different grades with high anti-broken characteristics",
              "Appropriate to the dry farming field with basalt and sand.",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ArrowRightAltIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LType;
