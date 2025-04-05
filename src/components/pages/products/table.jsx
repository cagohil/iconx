import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const tableData = [
  {
    type: "L TYPE",
    flatSize: "80X7",
    holeDia: "14.5",
    holePitch: "57",
    suitability: "SHAKTIMAN, FIELDKING, DASHMESH",
  },
  {
    type: "L TYPE",
    flatSize: "80X7",
    holeDia: "14.5",
    holePitch: "46",
    suitability: "SONALIKA, GARUD, SWAN",
  },
  {
    type: "L TYPE",
    flatSize: "80X7",
    holeDia: "14.5",
    holePitch: "44",
    suitability: "ZYROVATOR",
  },
  {
    type: "L TYPE",
    flatSize: "80X7",
    holeDia: "12.5",
    holePitch: "57",
    suitability: "SHAKTIMAN",
  },
  {
    type: "L TYPE",
    flatSize: "80X7",
    holeDia: "11.5",
    holePitch: "57",
    suitability: "HOWARD",
  },
  {
    type: "L TYPE",
    flatSize: "70X8",
    holeDia: "12.5",
    holePitch: "44",
    suitability: "MASCHIO, MAHINDRA",
  },
  {
    type: "C TYPE",
    flatSize: "70X7",
    holeDia: "12.5",
    holePitch: "54",
    suitability: "AGRIC",
  },
  {
    type: "C TYPE",
    flatSize: "70X7",
    holeDia: "12.5",
    holePitch: "44",
    suitability: "SHAKTIMAN, SONALIKA",
  },
];

const tableHeaders = [
  "TYPE",
  "FLAT SIZE",
  "HOLE DIA",
  "HOLE PITCH",
  "SUITABILITY",
];

const TableComponent = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      {" "}
      {/* Prevent full-page scroll */}
      <TableContainer
        component={Paper}
        sx={{ overflowX: "auto", Width: "100%" }}
      >
        <Table sx={{ Width: "100%" }} aria-label="scrollable table">
          {" "}
          {/* Ensure table doesn’t expand */}
          <TableHead sx={{ bgcolor: "#156CB5" }}>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "8px",
                    fontSize: { xs: "12px", md: "14px" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:nth-of-type(odd)": { bgcolor: "#f5f5f5" } }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {row.type}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {row.flatSize}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {row.holeDia}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {row.holePitch}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {row.suitability}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
