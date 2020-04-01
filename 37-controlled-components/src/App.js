import React from 'react';
import './App.css';
import BirdCharacterContainer from './BirdCharacterContainer'
import arrayOfBirds from './data'


class App extends React.Component{

  state = {
    birds: arrayOfBirds
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to the Birdhouse!!!</h1>
        <BirdCharacterContainer
          title="Bawk bawk"
          birds={this.state.birds}
        />
      </div>
    );
  }

}

export default App;
