import React, { Component } from "react";
import "./App.css";
import Square from "./Square.jsx";

class Board extends Component {
  render() {
    let squares = [];
    for (var i = 0; i < 25; i++) {
      squares.push(<Square idNum={i} />);
    }
    return <div>{squares}</div>;
  }
}

export default Board;
