import "./App.css";
import RouterApp from "./router";
import AlertApp from "./App.alert";
import SnackBarApp from "./App.snackBar";
import DialogApp from "./App.dialog";

function App() {
  return (
    <AlertApp>
      <SnackBarApp>
        <DialogApp>
          <RouterApp />
        </DialogApp>
      </SnackBarApp>
    </AlertApp>
  );
}

export default App;
