import {
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useReadLocalStorage from "../../hooks/useReadLocalStorage";
import useURLDrawer from "../../hooks/useURLDrawer";
import DrawerList from "./DrawerList";

type Props = {
  open: boolean;
};

const drawerWidth = {
  desktop: 360,
  mobile: 300,
};

const ContentStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: drawerWidth.mobile,
  [theme.breakpoints.up("md")]: {
    width: drawerWidth.desktop,
  },
}));
const DrawerHeader = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const UrlDrawer = ({ open }: Props) => {
  const urls = useReadLocalStorage("local-urls");
  const { setOpen } = useURLDrawer();

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer open={open} anchor="right">
      <ContentStyle>
        <DrawerHeader>
          <IconButton onClick={onClose} title="Close Drawer">
            <Icon component={ChevronRightIcon} />
          </IconButton>
          <Typography
            variant="subtitle1"
            align="center"
            color="primary"
            fontWeight={"bold"}
          >
            My URLs
          </Typography>
        </DrawerHeader>
        <Divider variant="fullWidth" />
        <Stack spacing={2} mt={2}>
          <DrawerList />
        </Stack>
      </ContentStyle>
    </Drawer>
  );
};

export default UrlDrawer;
