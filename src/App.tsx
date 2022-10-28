import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import AppRoutes from "./routes/appRoute";

class App extends Component {
  render() {
    return <AppRoutes />;
  }
}

export default App;
