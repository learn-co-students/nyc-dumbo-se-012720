import React from 'react';
import './App.css';
import ChipContainer from './components/ChipContainer'
import ChipForm from './components/ChipForm'

import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:4000/chips")
    .then(r => r.json())
    .then((arrayOfChips) => {
      this.props.setAllChips(arrayOfChips);
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to the Redux Store</h1>
        <ChipForm />
        <ChipContainer />
      </div>
    );
  }

}

// action Creator
  // functions whose job is to return an object (action)

let setAllChips = (chipsArr) => {
  return {
    type: "SET_ALL_CHIPS",
    payload: chipsArr
  }
}


let sendThisInformation = { setAllChips }


export default connect(null, sendThisInformation)(App);






















//
