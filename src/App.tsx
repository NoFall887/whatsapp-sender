import { Container, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import customTheme from "./theme";
import { MuiTelInput } from "mui-tel-input";
import Results from "./components/Results";
import "./app.css";

const App: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  return (
    <ThemeProvider theme={customTheme}>
      <Container
        maxWidth="md"
        style={{
          paddingTop: "36px",
          paddingBottom: "28px",
        }}
      >
        <Stack spacing={5}>
          <Heading />
          <Form setResult={setResult} result={result} />
          {result === null ? <></> : <Results link={result!} />}
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
