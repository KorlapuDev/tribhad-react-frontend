import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Badge,
  Stack,
} from "@mui/material";

const messages = [
  {
    id: 1,
    sender: "Dr. Lila Ramirez",
    time: "9:00 AM",
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline.",
    avatar: "/path-to-avatar1.jpg",
    unread: 0,
  },
  {
    id: 2,
    sender: "Ms. Heather Morris",
    time: "10:15 AM",
    message:
      "Don’t forget the staff training on digital tools scheduled for May 5th at 3 PM in the...",
    avatar: "/path-to-avatar2.jpg",
    unread: 4,
  },
  {
    id: 3,
    sender: "Mr. Carl Jenkins",
    time: "2:00 PM",
    message:
      "Budget review meeting for the next fiscal year is on April 28th at 10 AM.",
    avatar: "/path-to-avatar3.jpg",
    unread: 0,
  },
  {
    id: 4,
    sender: "Officer Dan Brooks",
    time: "3:10 PM",
    message:
      "Review the updated security protocols effective May 1st. Familiarize yourself with...",
    avatar: "/path-to-avatar4.jpg",
    unread: 2,
  },
  {
    id: 5,
    sender: "Ms. Tina Goldberg",
    time: "5:00 PM",
    message: "Reminder: Major IT system upgrade on May 8th from 1 PM to 4 PM.",
    avatar: "/path-to-avatar5.jpg",
    unread: 6,
  },
];

const DashboardMessagesCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        backgroundColor: "#fff",
        p: 2,
        boxShadow: 1,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          Messages
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
          View All
        </Typography>
      </Box>
      <List>
        {messages.map(({ id, sender, time, message, avatar, unread }) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={avatar} alt={sender} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" mb={1.5} justifyContent="space-between">
                    <Typography fontWeight="bold">{sender}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {time}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body2" color="textSecondary">
                      {message}
                    </Typography>
                    <>
                      {unread > 0 && (
                        <Badge
                          badgeContent={unread}
                          color="secondary"
                          sx={{
                            "& .MuiBadge-badge": {
                              fontSize: "0.75rem",
                              minWidth: "1.5rem",
                              height: "1.5rem",
                              borderRadius: "50%",
                            },
                          }}
                        />
                      )}
                    </>
                  </Stack>
                }
              />
            </ListItem>
            {id !== messages.length && (
              <Divider variant="inset" component="li" />
            )}
          </>
        ))}
      </List>
    </Box>
  );
};

export default DashboardMessagesCard;
