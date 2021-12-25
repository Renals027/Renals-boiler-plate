import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePath } from "./routes";
import { Home, NotFound } from "../screens";

function RouterApp(props) {
  return (
    <Router>
      <Routes>
        <Route path={RoutePath.home} element={<Home />} />
        <Route path={RoutePath.err} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
