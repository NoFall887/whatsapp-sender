import { Tooltip, Popover, IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import React from "react";
import Picker, { IEmojiData, SKIN_TONE_NEUTRAL } from "emoji-picker-react";

interface EmojiPickerCustomProps {
  onEmojiClick: (event: React.MouseEvent, emojiObject: IEmojiData) => void;
}

const EmojiPickerCustom: React.FC<EmojiPickerCustomProps> = ({
  onEmojiClick,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <Tooltip title="Emoji" arrow>
        <IconButton
          aria-describedby={id}
          aria-label={"emoji"}
          onClick={handleClick}
        >
          <InsertEmoticonIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Picker
          onEmojiClick={onEmojiClick}
          disableSkinTonePicker={true}
          skinTone={SKIN_TONE_NEUTRAL}
        />
      </Popover>
    </div>
  );
};

export default EmojiPickerCustom;
