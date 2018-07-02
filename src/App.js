import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { VictoryBar } from "victory";
import GitHubAPI from "./GitHubAPI";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHubAPI />
      </div>
    );
  }
}

export default App;
