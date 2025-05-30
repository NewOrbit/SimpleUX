import React from "react";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MinimalTables = () => {
  const data = [
    { name: "John Doe", role: "Designer", status: "Active", projects: 12 },
    { name: "Jane Smith", role: "Developer", status: "Active", projects: 8 },
    { name: "Mike Johnson", role: "Manager", status: "Away", projects: 15 },
    { name: "Sarah Wilson", role: "Designer", status: "Active", projects: 10 },
  ];

  const BorderedTable = () => (
    <TableContainer>
      <Table sx={{ border: "2px solid #ddd" }}>
        <TableHead sx={{ bgcolor: "#f5f5f5" }}>
          <TableRow>
            <TableCell sx={{ border: "1px solid #ddd", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell sx={{ border: "1px solid #ddd", fontWeight: "bold" }}>
              Role
            </TableCell>
            <TableCell sx={{ border: "1px solid #ddd", fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell sx={{ border: "1px solid #ddd", fontWeight: "bold" }}>
              Projects
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ border: "1px solid #ddd" }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ border: "1px solid #ddd" }}>
                {row.role}
              </TableCell>
              <TableCell sx={{ border: "1px solid #ddd" }}>
                {row.status}
              </TableCell>
              <TableCell sx={{ border: "1px solid #ddd" }}>
                {row.projects}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const MinimalTable = () => (
    <TableContainer>
      <Table
        sx={{
          "& .MuiTableCell-root": {
            border: "none",
            borderTop: "none",
            borderBottom: "none",
          },
          "& .MuiTableHead-root .MuiTableRow-root": {
            borderTop: "none",
          },
          "& .MuiTableRow-root": {
            borderTop: "none",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", pb: 2 }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", pb: 2 }}>Role</TableCell>
            <TableCell sx={{ fontWeight: "bold", pb: 2 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold", pb: 2 }}>Projects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": { bgcolor: "#f8f9fa" },
                borderBottom:
                  index === data.length - 1 ? "none" : "1px solid #e0e0e0",
              }}
            >
              <TableCell sx={{ py: 2 }}>{row.name}</TableCell>
              <TableCell sx={{ py: 2 }}>{row.role}</TableCell>
              <TableCell sx={{ py: 2 }}>{row.status}</TableCell>
              <TableCell sx={{ py: 2 }}>{row.projects}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Over-designed example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Over-designed with borders
          </Typography>
          <BorderedTable />
        </Grid>

        {/* Minimal example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Minimal design using closure
          </Typography>
          <MinimalTable />
        </Grid>
      </Grid>
    </Container>
  );
};
