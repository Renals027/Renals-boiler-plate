import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function DrawerComponent(props) {
  const [state, setState] = React.useState({
    isOpen : false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const drawerClose = () =>{
    setState({...state,isOpen:false})
  }

  React.useEffect(()=>{
      debugger;
      if(props.drawerOpen){
          setState({...state,isOpen:true})
      } 
  },[])

  return (
    <div>
      {/* {['left'].map((anchor) => (
        <React.Fragment key={anchor}> */}
      {/* <Button onClick={toggleDrawer("left", true)}>Left Side</Button> */}
      <Drawer
        anchor={"left"}
        open={state.isOpen}
        onClose={drawerClose}
      >
        <Box
        //   sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* </React.Fragment>
      ))} */}
    </div>
  );
}
