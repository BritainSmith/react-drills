import React, { Component } from "react";
import Image from "./Image";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          myImage={
            "http://www.finalfantasy.net/wp-content/uploads/2012/10/f00c0b02dbfb65267c7cc8d3c205f7bb.png"
          }
        />
      </div>
    );
  }
}

export default App;
