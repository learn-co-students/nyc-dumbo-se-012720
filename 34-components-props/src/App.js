import React from 'react';
import './App.css';
import BirdCharacterContainer from './BirdCharacterContainer'

// Functional Components ->
  // A function that returns JSX
// Access to props via the first argument of that functional component

// Class Components ->
  // Needs to have a function called `render`
    // Needs to return JSX
  // Access to props via `this.props`


function App(props) {
  return (

    <div className="App">
      <h1>Welcome to the Birdhouse!!!</h1>
      <h6>Created by: Code Benders</h6>
      <BirdCharacterContainer title="Bawk bawk"/>

    </div>

  );
}

export default App;
