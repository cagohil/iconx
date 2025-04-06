import React from "react";
import IconX from "./iconx";
import PremiumQuality from "./premiumQuality";
import { Box } from "@mui/material";
import HeroSlider from "./HeroSlider";
import AboutSection from "./About"

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto", my: "100px" }}>
        <AboutSection />
        {/* <IconX /> */}
        <PremiumQuality />
      </Box>
    </>
  );
};

export default Home;
