import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Home,
  School,
  Group,
  CalendarToday,
  AttachMoney,
  Notifications,
  LibraryBooks,
  Chat,
  AccountCircle,
  Settings,
  Logout,
} from "@mui/icons-material";

import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    { text: "Dashboard", icon: <Home />, active: true },
    { text: "Teachers", icon: <School />, active: false },
    { text: "Students", icon: <Group />, active: false },
    { text: "Attendance", icon: <Group />, active: false },
    { text: "Finance", icon: <AttachMoney />, active: false },
    { text: "Notice", icon: <Notifications />, active: false },
    { text: "Calendar", icon: <CalendarToday />, active: false },
    { text: "Library", icon: <LibraryBooks />, active: false },
    { text: "Message", icon: <Chat />, active: false },
  ];
  const otherItems = [
    { text: "Profile", icon: <AccountCircle /> },
    { text: "Setting", icon: <Settings /> },
    {
      text: "Log out",
      icon: <Logout />,
      handleEvent: () => {
        logout();
        navigate("/login");
      },
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        p: 2,
        height: "100vh",
      }}
    >
      <Box mb={5} textAlign="center">
        <Typography variant="h4">School Hub</Typography>
      </Box>
      <Box>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ pl: 1, mb: 1 }}
        >
          MENU
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderRadius: 2,
                mb: 1,
                backgroundColor: item.active ? "#e0f7fa" : "transparent",
                "&:hover": { backgroundColor: "#e0f7fa" },
              }}
            >
              <ListItemIcon sx={{ color: item.active ? "#00796b" : "#888A8C" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                slotProps={{
                  primary: {
                    sx: {
                      fontWeight: item.active ? "bold" : "normal",
                      color: item.active ? "black" : "#888A8C",
                    },
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ pl: 1, mb: 2 }}
        >
          OTHER
        </Typography>
        <List>
          {otherItems.map((item, index) => (
            <ListItemButton
              onClick={() => {
                item.handleEvent();
              }}
              key={index}
              sx={{ borderRadius: 2, mb: 1 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "#888A8C" }} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
