import React from "react";
import ContactCards from "./contactCard";
import Map from "./map";
import ContactForm from "./contactForm";
import { Box, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
      <ContactCards />

      {/* Map & Contact Form in a single row with 6-6 Grid Split */}
      <Grid container spacing={3} mt={3}>
        {/* Map - Left Side (6 Columns) */}
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>

        {/* Contact Form - Right Side (6 Columns) */}
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
