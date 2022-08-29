import { ButtonProps, Paper, Stack, styled, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { MuiTelInput } from "mui-tel-input";
import React, { useEffect, useState } from "react";
import { IEmojiData } from "emoji-picker-react";
import EmojiPickerCustom from "./EmojiPickerCustom";

const SubmitButton = styled(LoadingButton)<ButtonProps>(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bolder",
  color: "white",
}));

interface setResultState {
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
  result: null | string;
}

const Form: React.FC<setResultState> = ({ setResult, result }) => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [result]);
  function handlePhoneChange(
    value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) {
    setPhone(String(value));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // start formatting
    let url = "https://wa.me/";
    let trimmedPhone = phone.replace(/\s/g, "").slice(1);
    url += trimmedPhone + "?text=";
    let urlEncodedMessage = encodeURIComponent(message);
    url += urlEncodedMessage;

    // set result url
    setResult(url);
    setIsLoading(false);
  };

  return (
    <>
      <Paper
        elevation={3}
        component={"form"}
        style={{ padding: "24px" }}
        onSubmit={handleSubmit}
      >
        <Stack spacing={3}>
          <MuiTelInput
            value={phone}
            onChange={handlePhoneChange}
            variant="outlined"
            fullWidth
            label="Nomor WhatsApp:"
            defaultCountry="ID"
            forceCallingCode={true}
            required
          />

          <TextField
            id="message"
            variant="outlined"
            label="Pesan WhatsApp:"
            multiline
            fullWidth
            minRows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <EmojiPickerCustom onEmojiClick={onEmojiClick} />

          <SubmitButton loading={isLoading} variant="contained" type="submit">
            Buat Link
          </SubmitButton>
        </Stack>
      </Paper>
    </>
  );
};

export default Form;
