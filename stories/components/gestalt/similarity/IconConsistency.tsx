import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import {
  MdHome,
  MdSearch,
  MdFavorite,
  MdSettings,
  MdNotifications,
  MdShoppingCart,
  MdPerson,
  MdHelp,
} from "react-icons/md";
import { FaHome, FaSearch, FaHeart, FaCog } from "react-icons/fa";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";

export const IconConsistency = () => {
  const ConsistentToolbar = () => (
    <Stack p={2}>
      <Stack direction="row" spacing={1}>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdHome size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdSearch size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdFavorite size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdSettings size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdNotifications size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdShoppingCart size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdPerson size={24} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#1976d2" }}>
          <MdHelp size={24} />
        </IconButton>
      </Stack>
    </Stack>
  );

  const InconsistentToolbar = () => (
    <Stack p={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton size="large" sx={{ color: "#d32f2f" }}>
          <FaHome size={32} />
        </IconButton>
        <IconButton size="small" sx={{ color: "#1976d2" }}>
          <MdSearch size={16} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#9c27b0" }}>
          <FaHeart size={20} />
        </IconButton>
        <IconButton size="small" sx={{ color: "#ff9800" }}>
          <FaCog size={18} />
        </IconButton>
        <IconButton size="large" sx={{ color: "#4caf50" }}>
          <AiOutlineBell size={28} />
        </IconButton>
        <IconButton size="medium" sx={{ color: "#795548" }}>
          <AiOutlineShoppingCart size={24} />
        </IconButton>
        <IconButton size="small" sx={{ color: "#607d8b" }}>
          <MdPerson size={14} />
        </IconButton>
        <IconButton size="large" sx={{ color: "#e91e63" }}>
          <MdHelp size={30} />
        </IconButton>
      </Stack>
    </Stack>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Inconsistent example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Mixed icon styles and sizes
          </Typography>
          <InconsistentToolbar />
        </Grid>

        {/* Consistent example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Consistent icon system
          </Typography>
          <ConsistentToolbar />
        </Grid>
      </Grid>
    </Container>
  );
};
