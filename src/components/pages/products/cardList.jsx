import React from "react";
import { Container, Grid } from "@mui/material";
import Ltype from "../../../assests/L-type.jpg";
import Ctype from "../../../assests/C-type.jpg";
import Maschio from "../../../assests/Maschio-type.jpg";
import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={5} justifyContent="center">
        <ProductCard image={Ltype} title="L-Type Blade" buttonText="View Details" link="/products/l-type" />
        <ProductCard image={Ctype} title="Taiyo-Type Blade" buttonText="View Details" link="/products/c-type" />
        <ProductCard image={Maschio} title="Maschio-Type Blade" buttonText="View Details" link="/products/maschio-type" />
      </Grid>
    </Container>
  );
};

export default ProductList;
