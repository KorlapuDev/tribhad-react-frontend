import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography, MenuItem, Select, Paper } from "@mui/material";

// Sample data
const data = [
  { day: "Mon", present: 50, absent: 20 },
  { day: "Tue", present: 60, absent: 25 },
  { day: "Wed", present: 90, absent: 5 },
  { day: "Thu", present: 75, absent: 20 },
  { day: "Fri", present: 65, absent: 25 },
];

function AttendanceChart() {
  return (
    <Box component={Paper} borderRadius={3} p={3} width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Attendance</Typography>
        <Box display="flex" gap={2}>
          <Select defaultValue="Weekly" size="small">
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </Select>
          <Select defaultValue="Grade 3" size="small">
            <MenuItem value="Grade 3">Grade 3</MenuItem>
            <MenuItem value="Grade 4">Grade 4</MenuItem>
          </Select>
        </Box>
      </Box>

      <ResponsiveContainer width="100%" height={347}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis tickLine={false} />
          <Tooltip
            formatter={(value, name) => [
              `${value}`,
              name === "present" ? "Present" : "Absent",
            ]}
            labelFormatter={(label) => `Day: ${label}`}
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "8px",
            }}
          />
          <Legend verticalAlign="top" align="right" />
          <Bar
            dataKey="present"
            fill="#FFD95A"
            name="Total Present"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#A5D8FF"
            name="Total Absent"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default AttendanceChart;
