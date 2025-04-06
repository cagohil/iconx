import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Box,
  useTheme,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import blade from "../../../assests/heatblade.jpeg";
import ImageListItemAll from "./imageList";
import PageHeader from "../../PageHeader";

const QualityMachinery = () => {
  const theme = useTheme();
  return (<>
    <PageHeader
        title="Quality & Machinery"
        description="We have a world-class standard fully equipped with the latest manufacturing tools like Power presses, Shot Blasting Machine, and Electric furnace and everything is of the latest and finest version to create the latest innovation."
      />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: { xs: "100%", md: "80%" }, mx: "auto", mb: "50px" }}
    >
      {/* ✅ First Section */}

      <Grid container spacing={4} justifyContent="center">
        {/* ✅ Left Side - Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            During our quality check, our main emphasis is on:
          </Typography>
          <List>
            {[
              "Parts testing",
              "Alignment testing",
              "Wiring testing",
              "General testing covering size, dimension, engine, angle, and overall performance",
            ].map((item, index) => (
              <ListItem key={index}>
                <ArrowRightAltIcon sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* ✅ Right Side - Image */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box component="img" src={blade} alt="blade" sx={{ height: 300, minWidth:350, width:"auto" }} />
        </Grid>
      </Grid>

      {/* ✅ Second Section */}

      <Grid container spacing={2} justifyContent="center" mt={2}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            Machinery
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
            Production facilities:
          </Typography>
          <Typography variant="body1">
            Semi-automated line with product design & testing facility
          </Typography>
        </Grid>

        {/* ✅ Left Side - List 1 */}
        <Grid item xs={12} md={6}>
          <List>
            {[
              "Mechanical & hydraulic presses (50 to 250 tonnes capacity)",
              "Universal Milling machine (with vertical head & DRO)",
              "Shaper Machine",
              "Radial drill machine",
              "Geared drill machines",
              "Planner",
            ].map((item, index) => (
              <ListItem key={index}>
                <ArrowRightAltIcon sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* ✅ Right Side - List 2 */}
        <Grid item xs={12} md={6}>
          <List>
            {[
              "Heat treatment equipment",
              "General purpose machine tools",
              "Shot blasting machine",
              "Powder coating & painting facilities",
              "Rockwell hardness tester",
              "Packing Machines",
            ].map((item, index) => (
              <ListItem key={index}>
                <ArrowRightAltIcon sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <ImageListItemAll/>
    </Box>
    </>
  );
};

export default QualityMachinery;
