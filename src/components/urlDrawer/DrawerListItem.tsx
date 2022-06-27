import {
  Box,
  Button,
  Icon,
  ListItem,
  ListItemIcon,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { URLType } from "../../types/url.type";
import LinkIcon from "@mui/icons-material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { fDate } from "../../utils/formatTime";

type Props = {
  url: URLType;
};

const FlexFontStyle = styled(Typography)({
  display: "flex",
  alignItems: "center",
});
const DrawerListItem = ({ url }: Props) => {
  const { originalURL, shortURL, timeout } = url;
  return (
    <ListItem divider>
      <ListItemIcon>
        <LinkIcon
          sx={{
            transform: "rotate(-45deg)",
          }}
        />
      </ListItemIcon>
      <Stack spacing={0.5}>
        <Typography variant="body1" color="secondary">
          {shortURL}
        </Typography>
        <Stack>
          <Box>
            <Typography variant="body2" color="textSecondary">
              {originalURL}
            </Typography>
          </Box>
          <Box>
            <FlexFontStyle variant="caption" color="textSecondary">
              {timeout && (
                <>
                  <Icon
                    component={AccessTimeIcon}
                    fontSize="inherit"
                    sx={{
                      mr: "5px",
                      verticalAlign: "middle",
                    }}
                  />
                  {fDate(timeout)}
                </>
              )}
            </FlexFontStyle>
          </Box>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Button variant="contained" size="small">
            Copy
          </Button>
          <Tooltip title="Login to use Edit feature">
            <span>
              <Button variant="outlined" size="small" disabled>
                Edit
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default DrawerListItem;
