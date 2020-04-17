import React from 'react';
import './App.css';
import ChipContainer from './components/ChipContainer'
import ChipForm from './components/ChipForm'

function App() {

  return (
    <div className="App">
      <h1>Welcome to the Redux Store</h1>
      <ChipForm />
      <ChipContainer />
    </div>
  );
  
}

export default App;
