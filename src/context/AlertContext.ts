import React from "react";
import { IAlertContent } from "../components/Todo/Interfaces";

const AlertContext = React.createContext<IAlertContent>({
  showAlert: {
    isShow: false,
    variant: "",
    text: "",
  },
  setShowAlert: () => {},
});

export default AlertContext;
