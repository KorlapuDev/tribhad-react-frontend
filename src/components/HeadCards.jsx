import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const HeadCards = ({ data }) => {
  return (
    <Box
      component={Paper}
      elevation={3}
      bgcolor={data.cardColor}
      p={1.7}
      borderRadius={3}
    >
      <Stack mb={1.7} direction="row" justifyContent="space-between">
        <Typography
          variant="subtitle1"
          bgcolor="white"
          px={1.5}
          borderRadius={3}
          color={
            data.growth ? theme.palette.success.main : theme.palette.error.main
          }
        >
          {data.percentage}%
        </Typography>
        <MoreHorizOutlinedIcon sx={{ color: "white" }} />
      </Stack>
      <Typography variant="h3" fontWeight="540">
        {data.mainNum}
      </Typography>
      <Typography variant="h5" fontWeight="540">
        {data.bottomTitle}
      </Typography>
    </Box>
  );
};

export default HeadCards;
