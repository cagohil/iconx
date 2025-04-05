import { Box, Typography } from "@mui/material";
import React from "react";
import ProductList from "./cardList";
import TableComponent from "./table";

const Products = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>
      <Typography>
        At ICON BLADE INDUSTRIES, we specialize in designing and manufacturing a
        wide range of rotary tiller baldes, catering to various soil types and
        agricultural needs. Our Product line-up includes.
      </Typography>
      <Typography variant="h4" align="center" my={2}>
        Our Products
      </Typography>

      <ProductList />

      <TableComponent />
    </Box>
  );
};

export default Products;
