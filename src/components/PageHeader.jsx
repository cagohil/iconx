import { Box, Typography, Container, useTheme } from "@mui/material";
import React from "react";

const PageHeader = ({ title, description }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{
        width: "100%",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: "white",
        py: 8,
        mb: 4,
        boxShadow: theme.shadows[4],
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 2,
            textAlign: "center",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)"
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography 
            variant="h6" 
            component="p"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              textAlign: "center",
              opacity: 0.9,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.6
            }}
          >
            {description}
          </Typography>
        )}
      </Container>
    </Box>
  );
};


export default PageHeader;