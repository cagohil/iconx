import React from "react";
import { Container, Grid, Card, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const contactDetails = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: "#156CB5" }} />,
    title: "Office Address",
    details:
      "35, Arise Industrial Park, Dhanot, Chhatral, Gandhinagar, Gujarat - 382729",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: "#156CB5" }} />,
    title: "Phone Number",
    details: "+91-90336-64653, 78781-21617, 76659-16318 ",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: "#156CB5" }} />,
    title: "Email Address",
    details: "astaragri1@gmail.com",
  },
];

const ContactCards = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {contactDetails.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                height: 120,
                borderLeft: "4px solid #1976d2",
              }}
            >
              {/* Left Side - Icon */}
              <Box sx={{ mr: 2 }}>{item.icon}</Box>

              {/* Right Side - Text Content */}
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.details}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactCards;
