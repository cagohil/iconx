import React from "react";
import { Typography } from "@mui/material";
import "./About.css";
import tractor1 from "../../../assests/tractor-1.png";
import tractor2 from "../../../assests/tractor-2.jpeg";
import tractor3 from "../../../assests/tractor-3.jpg";
import tractor4 from "../../../assests/tractor-4.jpg";

const About = () => {
  return (
    <div className="about-section">
      {/* Text Section */}
      <div>
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
      </div>

      {/* Image Section */}
      <div className="about-images">
        <div className="image-column">
          <img src={tractor1} alt="tractor 1" className="about-image" />
          <img src={tractor3} alt="tractor 3" className="about-image" />
        </div>
        <div className="image-column second">
          <img src={tractor2} alt="tractor 2" className="about-image" />
          <img src={tractor4} alt="tractor 4" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
