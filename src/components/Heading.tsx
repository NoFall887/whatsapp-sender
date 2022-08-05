import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const Heading: React.FC = () => {
  const theme = useTheme();
  return (
    <Box style={{ textAlign: "center" }}>
      <Stack direction={"row"} spacing={1} style={{ justifyContent: "center" }}>
        <Typography
          component={"h1"}
          variant="h2"
          style={{ fontWeight: "bold" }}
        >
          <Typography
            component={"span"}
            color={theme.palette.primary.main}
            variant="h2"
            style={{ fontWeight: "bold" }}
          >
            WA
          </Typography>
          Send.
        </Typography>
        <img
          src={require("../assets/big-logo.png")}
          alt="wa send logo"
          style={{ height: "4em" }}
        />
      </Stack>

      <Typography component={"p"} variant={"h5"}>
        Kirim pesan WhatsApp tanpa simpan nomor kontak.
      </Typography>
    </Box>
  );
};

export default Heading;
