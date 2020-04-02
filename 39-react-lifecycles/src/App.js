import React from 'react';
import './App.css';
import BirdCharacterContainer from './BirdCharacterContainer'
import NewBirdForm from './NewBirdForm'
import SearchInput from './SearchInput'

class App extends React.Component{

  state = {
    birds: [],
    searchTerm: "bird"
  }

  componentDidMount(){
    fetch("http://localhost:4000/birds")
      .then(r => r.json())
      .then((arrayOfBirds) => {

        this.setState({
          birds: arrayOfBirds
        })

      })
  }


  changeSearchTerm = (newTerm) => {
    this.setState({
      searchTerm: newTerm
    })
  }


  functionThatReturnsAnArray = () => {

    let filteredVersionOfArray = this.state.birds.filter((birdPOJO) => {
      return birdPOJO.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ||
        birdPOJO.show.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return filteredVersionOfArray
  }





  addOneCharacter = (theNewCharacterPOJOIwantToAdd) => {

    let newCharacter = {...theNewCharacterPOJOIwantToAdd, watched: 0}
    let theNewCopyOfBirdsArray = [...this.state.birds, newCharacter]

    this.setState({
      birds: theNewCopyOfBirdsArray
    })
  }


  deleteACharacter = (characterName) => {
    let filteredArray = this.state.birds.filter((birdPOJO) => {
      return birdPOJO.name !== characterName
    })

    this.setState({
      birds: filteredArray
    })

  }


  updateACharacter = (characterName, numberToIncreaseLikes) => {

    let modifiedArray = this.state.birds.map((birdPOJO) => {
      if (birdPOJO.name === characterName) {
        let copiedObject = {
          ...birdPOJO,
          watched: birdPOJO.watched + numberToIncreaseLikes
        }
        return copiedObject
      } else {
        return birdPOJO
      }
    })

    this.setState({
      birds: modifiedArray
    })

  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to the Birdhouse!!!</h1>

        <SearchInput
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />

        <NewBirdForm
          addOneCharacter={this.addOneCharacter}
        />

        <BirdCharacterContainer
          title="Bawk bawk"
          birds={this.functionThatReturnsAnArray()}
          deleteACharacter={this.deleteACharacter}
          updateACharacter={this.updateACharacter}

        />

      </div>
    );
  }

}

export default App;
