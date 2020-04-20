import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux dependencies
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// routing dependencies
import {BrowserRouter} from 'react-router-dom'

// Thunky stuff
import ReduxThunk from 'redux-thunk'
import {applyMiddleware, compose} from 'redux'


let chipInitialState = {
  // Change the key-value pairs here
  chips: []
}

// whatever gets returned from the reducer BECOMES the state
let chipReducer = (state = chipInitialState, action) => {

  switch (action.type) {

    case "SET_ALL_CHIPS":

      let theArrayOfChips = action.payload
      return {
        ...state,
        chips: theArrayOfChips
      }


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





let userInitialState = {
  id: 0,
  token: "",
  username: "",
  user_chips: [],
}



let userReducer = (state = userInitialState, action) => {

  switch (action.type) {
    case "SET_USER_INFORMATION":
      return {
        ...state,
        id: action.payload.user.id,
        username: action.payload.user.username,
        user_chips: action.payload.user.user_chips,
        token: action.payload.token
      }
    default:
      return state
  }

}


// if an action gets dispatched, that action will be ran through all of the reducers
let rootReducer = combineReducers({
  chipInformation: chipReducer,
  userInformation: userReducer,
  // any other reducers will go here
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let storeObject = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))





ReactDOM.render(
    <BrowserRouter>
      <Provider store={storeObject}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
