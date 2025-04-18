import { Box, Typography } from "@mui/material";
import React from "react";
import ProductList from "./cardList";
import TableComponent from "./table";
import PageHeader from "../../PageHeader";

const Products = () => {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="At ICON BLADE INDUSTRIES, we specialize in designing and manufacturing
          a wide range of rotary tiller baldes, catering to various soil types
          and agricultural needs. Our Product line-up includes."
      />
      <Box sx={{ width: { xs: "100%", md: "80%" }, mx: "auto" }}>

        <ProductList />

        <TableComponent />
      </Box>
    </>
  );
};

export default Products;
