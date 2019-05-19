import React, { Component } from 'react';
import './App.css';
import ImageList from '../ImageList/ImageList'
//import TagChips from '../TagChips/TagChips'
// import DropDown from '../DropDown/DropDown' this was just a way to test the MateriaUI select component

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
