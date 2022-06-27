import { useState } from "react";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Tooltip,
  TextField,
  IconButton,
  InputAdornment,
  Icon,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Props = {
  value: string;
};

export default function CopyClipboard({ value, ...other }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const onCopy = () => {
    if (value) {
      enqueueSnackbar("Copied!", {
        variant: "success",
      });
    }
  };

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
