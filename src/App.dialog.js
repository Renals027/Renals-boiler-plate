import React,{useState} from 'react';
import {DialogContext} from "./context"

function DialogApp(props) {
    const [dialog,setDialog] = useState(false)
    const handleClose =() => {
        setDialog(false)
    }

    return (
        <DialogContext.Provider value={{dialog,setDialog}}>
            {props.children}
        </DialogContext.Provider>
    );
}

export default DialogApp;