import {
  Button,
  Card,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
interface ResultData {
  link: string;
}

const Results: React.FC<ResultData> = ({ link }) => {
  return (
    <Paper elevation={3} style={{ padding: "18px" }}>
      <Stack spacing={3}>
        <Card variant="outlined" style={{ padding: "8px" }}>
          <Stack
            direction={"row"}
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography
              variant="body1"
              component={"p"}
              id="link"
              style={{ wordBreak: "break-all", whiteSpace: "normal" }}
            >
              {link}
            </Typography>
            <Tooltip title="click to copy">
              <IconButton
                aria-label="copy"
                onClick={() => {
                  navigator.clipboard.writeText(link);
                }}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Card>
        <Button
          href={link}
          target="_blank"
          variant="contained"
          color="secondary"
          startIcon={<WhatsAppIcon />}
        >
          Buka WhatsApp
        </Button>
      </Stack>
    </Paper>
  );
};

export default Results;
