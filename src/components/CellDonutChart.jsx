import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Box, Paper, Stack, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import theme from "../theme";

const dataBoys = [{ name: "Boys", value: 45.414 }];
const dataGirls = [{ name: "Girls", value: 40.27 }];

const COLORS = ["#A5D8FF", "#FFD95A"];

function StudentChart() {
  return (
    <Box component={Paper} elevation={2} borderRadius={3} p={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Students</Typography>
        <MoreHorizOutlinedIcon />
      </Stack>
      <Box display="flex" width="100%" justifyContent="center">
        <PieChart width={300} height={300}>
          <Pie
            data={dataGirls}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={150}
            startAngle={90}
            endAngle={450}
          >
            <Cell fill={COLORS[1]} />
          </Pie>

          <Pie
            data={dataBoys}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
          >
            <Cell fill={COLORS[0]} />
          </Pie>
          <Tooltip />
        </PieChart>
      </Box>

      <Box display="flex" justifyContent="space-around" mt={5}>
        <Box>
          <Typography variant="h6">45.414</Typography>
          <Typography variant="body2" color={theme.palette.custom.disableGrey}>
            Boys (47%)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">40.270</Typography>
          <Typography variant="body2" color={theme.palette.custom.disableGrey}>
            Girls (53%)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StudentChart;
