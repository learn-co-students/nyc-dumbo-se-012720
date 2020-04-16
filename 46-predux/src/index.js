import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// redux dependencies
import { createStore } from 'redux'

let initialState = {
  // Change the key-value pairs here
  hello: "this is inside the state",
  chips: [],
  number: 0
}


// whatever gets returned from the reducer BECOMES the global state
let theReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_NUMBER":
      // action =  {type: "ADD_NUMBER", payload: 3}
      // console.log(action);
      // console.log(state);
      let theNewNumber = state.number + action.payload

      return {
        ...state,
        number: theNewNumber
      }




    case "SUBTRACT_NUMBER":
      // action = {type: "SUBTRACT_NUMBER", payload: {number: 5} }
      let subtracted_number = state.number - action.payload.number

      return {
        ...state,
        number: subtracted_number
      }





    default:
      return state
  }

}

let storeObject = createStore(theReducer)
let globalState = storeObject.getState()

console.log("BEFORE WE DO ANYTHING:", globalState.number);

let theActionToIncreaseBy3 = {
  type: "ADD_NUMBER",
  payload: 3
}

storeObject.dispatch(theActionToIncreaseBy3)
storeObject.dispatch(theActionToIncreaseBy3)
storeObject.dispatch(theActionToIncreaseBy3)

storeObject.dispatch({type: "SUBTRACT_NUMBER", payload: {number: 5} })
storeObject.dispatch({type: "SUBTRACT_NUMBER", payload: {number: 5} })
storeObject.dispatch({type: "SUBTRACT_NUMBER", payload: {number: 5} })


console.log("AFTER WE DISPATCH:", storeObject.getState().number);






ReactDOM.render(
    <App />,
  document.getElementById('root')
);
