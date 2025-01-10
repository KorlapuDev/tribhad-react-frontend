import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Footer = () => {
  return (
    <Stack justifyContent="space-between" direction="row" width="100%" p={2}>
      <Stack color="#A7A9AA" direction="row" alignItems="center" spacing={1}>
        <MarkunreadIcon />
        <Typography variant="caption">email@gmail.com</Typography>
      </Stack>
      <Box component={Stack} direction="row" spacing={2} color="#A7A9AA">
        <Typography variant="caption">Terms of Uses</Typography>
        <Typography variant="caption">PrivacyPolicy</Typography>
        <Typography variant="caption">Copyright c</Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
