import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import theme from "../theme";
import CalendarWithAgenda from "../components/CalendarWithAgenda";
import HeadCards from "../components/HeadCards";
import StudentChart from "../components/CellDonutChart";
import AttendanceChart from "../components/AttendenceChart";
import EarningsChart from "../components/Earning";
import DashboardMessagesCard from "../components/DashboardMessagesCard";

const HomePage = () => {
  const cardsData = [
    {
      bottomTitle: "Students",
      percentage: "15",
      growth: true,
      mainNum: "124,694",
      cardColor: theme.palette.custom.purple,
    },
    {
      bottomTitle: "Teachers",
      percentage: "3",
      growth: false,
      mainNum: "12,379",
      cardColor: theme.palette.custom.yellow,
    },
    {
      bottomTitle: "Staff",
      percentage: "3",
      growth: true,
      mainNum: "29,379",
      cardColor: theme.palette.custom.purple,
    },
    {
      bottomTitle: "Awards",
      percentage: "5",
      growth: false,
      mainNum: "95,800",
      cardColor: theme.palette.custom.yellow,
    },
  ];

  const comtData = [
    {
      bottomTitle: "Students",
      percentage: "15",
      growth: true,
      mainNum: "124,694",
      cardColor: theme.palette.custom.purple,
    },
    {
      bottomTitle: "Teachers",
      percentage: "3",
      growth: false,
      mainNum: "12,379",
      cardColor: theme.palette.custom.yellow,
    },
  ];

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Grid container spacing={2}>
            {cardsData.map((ele) => (
              <Grid size={3}>
                <HeadCards data={ele} />
              </Grid>
            ))}
            <Grid size={5}>
              <StudentChart />
            </Grid>
            <Grid size={7}>
              <AttendanceChart />
            </Grid>
            <Grid size={10}>
              <EarningsChart />
            </Grid>
            <Grid size={2}>
              <Stack spacing={2}>
                {comtData.map((ele) => (
                  <HeadCards data={ele} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={4}>
          <Stack spacing={2}>
            <CalendarWithAgenda />
            <DashboardMessagesCard />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
