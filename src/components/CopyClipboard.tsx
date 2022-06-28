import { useState } from "react";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Tooltip,
  TextField,
  IconButton,
  InputAdornment,
  Icon,
  Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Props = {
  value: string;
  type?: "input" | "btn";
};

export default function CopyClipboard({
  value,
  type = "input",
  ...other
}: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const onCopy = () => {
    if (value) {
      enqueueSnackbar("Copied!", {
        variant: "success",
      });
    }
  };

  if (type === "btn") {
    return (
      <CopyToClipboard text={value} onCopy={onCopy}>
        <Tooltip title="Copy">
          <Button
            variant="contained"
            size="small"
            endIcon={<ContentCopyIcon />}
          >
            Copy
          </Button>
        </Tooltip>
      </CopyToClipboard>
    );
  }

  return (
    <TextField
      fullWidth
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CopyToClipboard text={value} onCopy={onCopy}>
              <Tooltip title="Copy">
                <IconButton>
                  <Icon component={ContentCopyIcon} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
}
