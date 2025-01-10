import React, { useState } from "react";
import { Box, Typography, IconButton, CardContent, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "../theme";
import MyCalendar from "./Calender";

const CalendarWithAgenda = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2030, 8, 22)); // Example: Sept 22, 2030

  const handlePrev = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const agendaItems = [
    {
      time: "08:00 am",
      grade: "All Grade",
      task: "Homeroom & Announcement",
      color: theme.palette.custom.purpleLight,
    },
    {
      time: "10:00 am",
      grade: "Grade 3–5",
      task: "Math Review & Practice",
      color: theme.palette.custom.yellowLight,
    },
    {
      time: "10:30 am",
      grade: "Grade 6–8",
      task: "Science Experiment & Discussion",
      color: theme.palette.custom.blueLight,
    },
  ];

  return (
    <Box component={Paper} sx={{ p: 2, width: "100%", borderRadius: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <MyCalendar />
      </Box>

      {/* Agenda */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        Agenda
      </Typography>
      <Grid container spacing={2}>
        {agendaItems.map((item, index) => (
          <Grid item size={12} key={index}>
            <Box
              sx={{
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                p: 1,
                borderRadius: 3,
              }}
            >
              <Box sx={{ flex: "0 0 80px", textAlign: "center" }}>
                <Typography variant="body2">{item.time}</Typography>
              </Box>
              <Box sx={{ borderLeft: "6px solid white", height: "60px" }} />
              <CardContent>
                <Typography variant="body2">{item.grade}</Typography>
                <Typography variant="body1" fontWeight="bold">
                  {item.task}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarWithAgenda;
