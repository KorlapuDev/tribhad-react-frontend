import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Paper, Stack, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const EarningsChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [800, 850, 600, 700, 750, 900, 850, 870, 1000, 950, 870, 920],
        borderColor: "rgba(0, 176, 255, 1)",
        backgroundColor: "rgba(0, 176, 255, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(0, 176, 255, 1)",
        fill: true,
      },
      {
        label: "Expense",
        data: [500, 520, 480, 550, 600, 570, 560, 590, 610, 620, 640, 650],
        borderColor: "rgba(148, 112, 255, 1)",
        backgroundColor: "rgba(148, 112, 255, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(148, 112, 255, 1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw}K`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value}K`;
          },
        },
      },
    },
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        padding: 2,
        borderRadius: 3,
      }}
    >
      <Stack mb={1.7} direction="row" justifyContent="space-between">
        <Typography variant="h6">Earnings</Typography>
        <MoreHorizOutlinedIcon />
      </Stack>
      <Box sx={{ height: 300 }}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default EarningsChart;
