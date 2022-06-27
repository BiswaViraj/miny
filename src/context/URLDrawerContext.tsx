import React from "react";
type Props = {
  children: React.ReactNode;
};

type URLDrawerContextType = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const URLDrawerContext = React.createContext<URLDrawerContextType | null>(null);

const URLDrawerContextProvider = ({ children }: Props) => {
  const [state, setState] = React.useState(false);

  const handleOpen = (val: boolean) => {
    setState(val);
  };
  return (
    <URLDrawerContext.Provider value={{ open: state, setOpen: handleOpen }}>
      {children}
    </URLDrawerContext.Provider>
  );
};

export { URLDrawerContext, URLDrawerContextProvider };
