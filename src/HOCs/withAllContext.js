import React from "react";
import {AlertContext,SnackBarContext,DialogContext} from "../context";

const withAllContexts = (Component) => (props) => {
    const AlertsProvide = React.useContext(AlertContext);
    const SnackBarProvide = React.useContext(SnackBarContext);
    const DialogProvide = React.useContext(DialogContext);
    return(
        <Component 
            {...props}
            alertProvide = {AlertsProvide}
            snackBarProvide = {SnackBarProvide}
            dialogProvide = {DialogProvide}
        />
    )
}

export default withAllContexts;