/*jshint esversion: 6 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
  render() {
    return (
      <div className='square'></div>
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
