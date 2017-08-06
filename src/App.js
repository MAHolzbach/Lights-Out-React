
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'white'
    };
  }
  handleClick = () => {
    if(this.state.bgColor === 'white') {
      this.setState({bgColor: 'gray'});
    } else {
      this.setState({bgColor: 'white'});
    }
  }
  render() {
    let squareColor = this.state.bgColor;
    let cssClasses = `${squareColor} square`;
    return (
      <div className={cssClasses} onClick={this.handleClick}></div>
    );
  }
}

class Board extends Component {
  render() {
    return (
      <div className='board'>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
      </div>
    );
  }
}

export default Board;
