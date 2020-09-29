import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./smurfForm.js";
import Smurf from "./Smurf.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>OUR SMURFS</h1>
        <Smurf />
        <SmurfForm/>
      </div>
    );
  }
}


export default App;

