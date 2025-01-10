import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Box,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
            borderRadius: "20px",
            padding: "0 10px",
          }}
        >
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "15px", ml: 2 }}>
          <IconButton sx={{ bgcolor: "white" }}>
            <Badge color="primary" badgeContent={4}>
              <ChatIcon sx={{ color: "black" }} />
            </Badge>
          </IconButton>
          <IconButton sx={{ bgcolor: "white" }}>
            <Badge color="primary" badgeContent={3}>
              <NotificationsIcon sx={{ color: "black" }} />
            </Badge>
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box textAlign="right">
              <Typography variant="body1">Linda Adora</Typography>
              <Typography variant="caption" color="textSecondary">
                Admin
              </Typography>
            </Box>
            <Avatar
              alt="Linda Adora"
              src="/path-to-avatar.jpg"
              sx={{ width: 32, height: 32 }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
