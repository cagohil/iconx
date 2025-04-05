import React from "react";
import { Box, Typography, Grid, ImageList, ImageListItem } from "@mui/material";
import tractor1 from "../../../assests/tractor-1.png";
import tractor2 from "../../../assests/tractor-2.jpeg";
import tractor3 from "../../../assests/tractor-3.jpg";
import tractor4 from "../../../assests/tractor-4.jpg";

const itemData = [
  { img: tractor1, title: "Tractor 1" },
  { img: tractor2, title: "Tractor 2" },
  { img: tractor3, title: "Tractor 3" },
  { img: tractor4, title: "Tractor 4" },
];

const IconX = () => {
  return (
    <Box>
      <Grid container spacing={4} alignItems="center">
        {/* ✅ Left Section - Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            WELCOME TO
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "primary.main", mb: 2 }}
          >
            ICON BLADE INDUSTRIES
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Icon Blade Industries is the best manufacturer of rotary tiller
            blades and provides high-quality service.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Being the best Agricultural Equipment Manufacturer, we provide top
            international and local brands at unbelievably low rates. Our aim is
            to support farmers by providing Agri Products online at advantageous
            prices.
          </Typography>

          <Typography variant="body1">
            Icon Blade Industries has built a reputation as one of the best
            Agricultural Equipment Suppliers online. We have been presenting
            farming equipment at discounted prices for over a decade. Our
            product range now includes Power Tiller Blades and Agricultural
            Spare Parts, ensuring affordability and value for our customers.
          </Typography>
        </Grid>

        {/* ✅ Right Section - Woven Image Layout */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 600,
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              "&:hover": {
                overflow: "hidden", // Ensure overflow is hidden on hover
              },
            }}
          >
            <ImageList variant="masonry" cols={2} gap={10} >
              {itemData.map((item, index) => (
                <ImageListItem
                  key={index}
                  sx={{ borderRadius: "10px", boxShadow: 3 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      maxWidth: "220px",
                      height: index % 2 === 0 ? "230px" : "270px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for shadow as well
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0,0,0,0.2)"; // Add shadow
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none"; // Reset shadow
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IconX;
