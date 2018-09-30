import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      videoGameCharacters: ["Link", "Zelda", "Shiek", "Nabooru", "Ganondorf"]
    };
  }
  render() {
    let vCharactersToDisplay = this.state.videoGameCharacters.map(
      (element, index) => {
        return <h2 key={index}>{element}</h2>;
      }
    );

    return <div className="App">{vCharactersToDisplay}</div>;
  }
}

export default App;
