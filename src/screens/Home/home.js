import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { AlertComponent,TopNavBar,DrawerComponent } from "../../components";
import { withAllContexts } from "../../HOCs";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>({
  root:{
    backgroundColor:"#000",
    height:"100vh"
  }
}))

function Home(props) {
  const classes = useStyles();
  const { alerts, setAlerts } = props.alertProvide;
  const { snacky, setSnacky } = props.snackBarProvide;
  const { dialog,setDialog} = props.dialogProvide;

  const [drawerOpen,setDrawerOpen] = useState(false)
  const handleSuccess = () => {
    setDialog(true)
    setAlerts({
      ...alerts,
      severity: "success",
    });
    setSnacky({
      ...snacky,
      open: true,
      message: "Fuck it finally",
      vertical: "bottom",
      horizontal: "left",
      autoHideDuration: 2000,
      severity:"success"
    });
  };

  const handleError = () => {
    setAlerts({
      ...alerts,
      severity: "error",
    });
    setSnacky({
      ...snacky,
      open: true,
      message: "dit it finally",
      vertical: "bottom",
      horizontal: "left",
      autoHideDuration: 2000,
      severity:"error"
    });
  };
  return (
    <div className={classes.root}>
      <TopNavBar />
      <Typography style={{color:"white"}}>Hello am back</Typography>
      {/* <AlertComponent severity={alerts.severity} /> */}
      <div>
        <Button variant="contained" onClick={handleSuccess}>
          Open Dialog
        </Button>
      </div>
      {/* <div>
        <Button onClick={handleError}>Error</Button>
      </div> */}
    </div>
  );
}

export default withAllContexts(Home);
