import React from "react";

export const AlertContext = React.createContext({
    open : false,
    message: "Alert is called",
    variant : "filled",
    severity : "error",
    setAlerts: () => null
})

export const SnackBarContext = React.createContext({
    open: null,
    vertical:null,
    horizontal :null,
    autoHideDuration: 6000,
    message: null,
    severity:null,
    setSnacky: () => null
})

export const DialogContext = React.createContext({
    open:null,
    setDialog: () => null
})