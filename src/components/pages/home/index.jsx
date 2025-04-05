import React from "react";
import IconX from "./iconx";
import PremiumQuality from "./premiumQuality";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
      <IconX />
      <PremiumQuality />
    </Box>
  );
};

export default Home;
