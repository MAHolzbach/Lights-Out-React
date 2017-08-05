
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    this.className = 'gray';
  }
  render() {
    return (
      <div className='square' onClick={this.handleClick}></div>
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
