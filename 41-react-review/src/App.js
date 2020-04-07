import React, { Component } from 'react';
import Search from './Search'
import PTag from './PTag'
import BirdContainer from './BirdContainer'

import "./App.css"

class App extends Component {

  state={
    checked: true,
    birds: [],
    searchTerm: "n",
    bottomSearchTerm: "Bottom",
  }


  componentDidMount(){
    this.setState({
      birds: [
        {name: "Robin"},
        {name: "Duck"},
        {name: "Heron"},
        {name: "Falcon"},
        {name: "Blue Jay"},
        {name: "Chicken"},
      ]
    })
  }



  figureOutTheStructureOfBirds = () => {
    let copyOfArray = this.state.birds.filter((birdPOJO) => {
      return birdPOJO.name.includes(this.state.searchTerm)
    })

    if (this.state.checked) {
      copyOfArray.sort((birdAPOJO, birdBPOJO) => {
        return birdAPOJO.name.localeCompare(birdBPOJO.name)
      })
    }

    return copyOfArray
  }




  addAnExclamationMarkTo = (birdName) => {

    let transformedArray = this.state.birds.map((birdPOJO) => {
      if (birdPOJO.name === birdName) {
        return {
          ...birdPOJO,
          name: birdPOJO.name + "!"
        }
      } else {
        return birdPOJO
      }
    })

    this.setState({
      birds: transformedArray
    })

  }



  changeSearchTerm = (evt) => {
    // !evt.target.value.includes('x')
    if (evt.target.value.length < 10 && !evt.target.value.toLowerCase().includes('x')) {
      this.setState({
        searchTerm: evt.target.value
      })
    }
  }



  changeCheckedState = (evt) => {
    // debugger
    // console.log("hello");
    this.setState({
      checked: !this.state.checked
    })
  }



  changeBottomSearchTerm = (wordFromChild) => {
    this.setState({
      bottomSearchTerm: wordFromChild
    })
  }

  

  render() {
    return (
      <div className="App">
        <h1>Review</h1>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.changeCheckedState}

        />

        <BirdContainer
          birds={this.figureOutTheStructureOfBirds()}
          addAnExclamationMarkTo={this.addAnExclamationMarkTo}
        />

        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.changeSearchTerm}
        />
        <p>{this.state.searchTerm}</p>

        <hr/>

        <Search
          bottomSearchTerm={this.state.bottomSearchTerm}
          changeBottomSearchTerm={this.changeBottomSearchTerm}
        />
        <PTag
          bottomSearchTerm={this.state.bottomSearchTerm}
        />





      </div>
    );
  }

}

export default App;
