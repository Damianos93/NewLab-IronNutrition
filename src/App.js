import React, { Component } from "react";
import "bulma/css/bulma.css";
import AllFood from "./components/AllFood";
import Nav from "./components/Nav";
import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <AllFood />
      </div>
    );
  }
}

export default App;
