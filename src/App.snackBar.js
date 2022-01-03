import React, { useState } from "react";
import { SnackBarContext } from "./context";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackBarApp(props) {
  const [snacky, setSnacky] = useState({
    open: false,
    autoHideDuration: 6000,
    message: null,
    vertical: "top",
    horizontal: "right",
    severity:null
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnacky({
      open: false,
      autoHideDuration: snacky.autoHideDuration,
      message: snacky.message,
      vertical: snacky.vertical,
      horizontal: snacky.horizontal,
      severity: snacky.severity
    });
  };

  return (
    <SnackBarContext.Provider value={{ snacky, setSnacky }}>
      {props.children}
      <Snackbar
        anchorOrigin={{
          vertical: snacky.vertical,
          horizontal: snacky.horizontal,
        }}
        open={snacky.open}
        autoHideDuration={snacky.autoHideDuration}
        onClose={handleClose}
      >
         <Alert onClose={handleClose} severity={snacky.severity} sx={{ width: '100%' }} >
          {snacky.message}
        </Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  );
}

export default SnackBarApp;
