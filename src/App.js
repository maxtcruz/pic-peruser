import React, { Component } from 'react';
import PhotoStream from './Components/PhotoStream/PhotoStream';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1><i>pic peruser</i></h1>
        <PhotoStream />
      </div>
    );
  }
}

export default App;
