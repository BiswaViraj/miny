import React from "react";
import { URLDrawerContext } from "../context/URLDrawerContext";

const useURLDrawer = () => {
  const context = React.useContext(URLDrawerContext);
  if (!context)
    throw new Error(
      "URL Drawer context must be use inside URL Drawer Provider"
    );
  return context;
};

export default useURLDrawer;
