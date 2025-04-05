import React, { useState } from "react";
import { Container, Grid, Button, Box, Typography } from "@mui/material";
import CustomInput from "./customInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbwXjus9q8PSoX0xNXXzoXyo1QaX4yh9e86mw3kYxEZ6InQBJOJMNwbtkovhLWm1_ghe/exec";

    const formDataToSend = new URLSearchParams();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    fetch(url, {
      method: "POST",
      body: formDataToSend.toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Form Submitted Successfully! ✅");
        } else {
          alert("Error: " + data.message);
        }
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 3,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom color="#156CB5">
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <CustomInput
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomInput
              label="Mobile No"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomInput
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <CustomInput
          label="Message"
          name="message"
          multiline
          rows={5}
          value={formData.message}
          onChange={handleChange}
          sx={{ mt: 2 }}
          required
        />
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
