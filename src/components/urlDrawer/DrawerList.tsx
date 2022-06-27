import { List, Typography } from "@mui/material";
import React from "react";
import useReadLocalStorage from "../../hooks/useReadLocalStorage";
import { URLType } from "../../types/url.type";
import DrawerListItem from "./DrawerListItem";

const DrawerList = () => {
  const localUrls = useReadLocalStorage<URLType[] | null>("local-urls");
  if (!localUrls || localUrls.length < 1)
    return <Typography>No URLs found...</Typography>;
  return (
    <List>
      {localUrls.map((url) => (
        <DrawerListItem url={url} key={`list-${url.shortURL}`} />
      ))}
    </List>
  );
};

export default DrawerList;
