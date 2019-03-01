import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {Spinner} from "reactstrap"

import AppNavbar from "./components/AppNavbar"

class App extends Component {
  state = {
    isLoad: false
  }

  onLoading = (data) => {
    this.setState({
      isLoad: !data
    })
  }

  render() {
    return (
      <div className="App">
        <AppNavbar onLoading={this.onLoading} />
        { this.state.isLoad ? <Spinner type="grow" color="primary" /> : <h1>data</h1> }
      </div>
    );
  }
}

export default App;
