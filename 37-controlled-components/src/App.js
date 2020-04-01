import React from 'react';
import './App.css';
import BirdCharacterContainer from './BirdCharacterContainer'
import NewBirdForm from './NewBirdForm'

import arrayOfBirds from './data'


class App extends React.Component{

  state = {
    birds: arrayOfBirds
  }


  addOneCharacter = (theNewCharacterPOJOIwantToAdd) => {
    console.log(this.state.birds);
    console.log(theNewCharacterPOJOIwantToAdd);
    // `this` is an instance of App

    // this.setState()
  }




  render(){
    return (
      <div className="App">
        <h1>Welcome to the Birdhouse!!!</h1>
        <NewBirdForm
          addOneCharacter={this.addOneCharacter}
        />

        <BirdCharacterContainer
          title="Bawk bawk"
          birds={this.state.birds}
        />
      </div>
    );
  }

}

export default App;
