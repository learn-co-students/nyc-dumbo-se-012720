import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then((arrayOfPlaneteers) => {
        this.setState({
          planeteers: arrayOfPlaneteers
        })
      })

  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }


  decideWhichArrayToSendDown = () => {
    let lowerCaseTerm = this.state.searchTerm.toLowerCase()

    let filteredArray = this.state.planeteers.filter((planeteer) => {
      return planeteer.name.toLowerCase().includes(lowerCaseTerm)
        ||
      planeteer.bio.toLowerCase().includes(lowerCaseTerm)
    })

    return filteredArray
  }




  addOnePlaneteer = (singlePlaneteerObj) => {
    console.log("FROM APP", singlePlaneteerObj);


    // if (this.state.planeteers.some((planeteer) => {
      // return planeteer.name === singlePlaneteerObj.name
    // })) {

    // }

    fetch("http://localhost:4000/planeteers", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(singlePlaneteerObj)
    })
      .then(r => r.json())
      .then((newlyCreatedPlaneteerObj) => {

        console.log(singlePlaneteerObj, "does not have an ID");
        console.log(newlyCreatedPlaneteerObj, "has an ID");
        let newCopyOfAnArray = [...this.state.planeteers, newlyCreatedPlaneteerObj]

        this.setState({
          planeteers: newCopyOfAnArray
        })

      })

  }




  render(){
    return (
      <div>
        <Header />
        <SearchBar
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <RandomButton
          addOnePlaneteer={this.addOnePlaneteer}
        />
        <PlaneteersContainer
          planeteers={this.decideWhichArrayToSendDown()}
        />
      </div>
    );
  }

}

export default App;
