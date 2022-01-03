import React, { useState } from "react";
import { AlertContext } from "./context";

const AlertApp = (props) => {
  const [alerts, setAlerts] = useState({
    open: false,
    message: "Alert is called",
    variant: "filled",
    severity: "error",
  });
  return (
    <AlertContext.Provider value={{ alerts, setAlerts }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertApp;
