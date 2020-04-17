import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import chipsArray from './chips'

// redux dependencies
import { createStore } from 'redux'
import { Provider } from 'react-redux'


let initialState = {
  // Change the key-value pairs here
  chips: chipsArray,
  hello: "From inside the state"
}







// whatever gets returned from the reducer BECOMES the global state
let theReducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_ONE_CHIP":

      let theChipIwantToAdd = action.payload
      let copyOfChips = [...state.chips, theChipIwantToAdd]


      return {
        ...state,
        chips: copyOfChips
      }


    case "REMOVE_CHIP":
      let theChipName = action.payload
      let filteredChips = state.chips.filter((chip) => {
        return chip.name !== theChipName
      })

      return {
        ...state,
        chips: filteredChips
      }

    default:
      return state
  }

}









let storeObject = createStore(theReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())








ReactDOM.render(
    <Provider store={storeObject}>
      <App />
    </Provider>,
  document.getElementById('root')
);
































//
