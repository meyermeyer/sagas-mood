import React, { Component } from 'react';
import './App.css';
import ImageList from '../ImageList/ImageList'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <ImageList />
      </div>
    );
  }
}

export default App;
