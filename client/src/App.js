import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import StudentList from "./components/StudentList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <StudentList />
      </div>
    );
  }
}

export default App;
