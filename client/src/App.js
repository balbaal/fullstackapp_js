import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import StudentList from "./components/StudentList";
import AboutPage from "./components/About";
import CollegeList from "./components/CollegeList";
import NotFound from "./components/NotFound";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route path="/student_list" component={StudentList} />
              <Route path="/college_list" component={CollegeList} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
