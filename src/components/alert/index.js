import React from "react";
import { Alert, Stack } from "@mui/material";

function AlertComponent(props) {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity={props.severity}>
          {/* {props.message} */}
          heloo
        </Alert>
      </Stack>
    </div>
  );
}

export default AlertComponent;
