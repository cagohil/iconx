import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const ProductCard = ({ image, title, buttonText, link }) => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display="flex"
      justifyContent="center"
    >
      <Card sx={{ width: 280, boxShadow: 3, borderRadius: 2, borderTop: "4px solid #1976d2",  }}>
        <CardMedia component="img" height="200" image={image} alt={title} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom my={2}>
            {title}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(link)}
          >
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
