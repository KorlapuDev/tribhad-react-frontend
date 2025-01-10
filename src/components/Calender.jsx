import { Box } from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Keep the default styles

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Calendar onChange={handleDateChange} value={date} />
    </Box>
  );
}

export default MyCalendar;
