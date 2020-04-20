import React from 'react';
import './App.css';
import ChipContainer from './components/ChipContainer'
import ChipForm from './components/ChipForm'
import Form from './components/Form'

import {connect} from 'react-redux'

// Routing Stuff
import {Switch, Route} from 'react-router-dom'




class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:4000/chips")
    .then(r => r.json())
    .then((arrayOfChips) => {
      this.props.setAllChips(arrayOfChips);
    })


    if (localStorage.token) {
      this.props.persistUser()
    }
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleResponse = (resp) => {
    localStorage.token = resp.token
    this.props.setUserInformation(resp)
  }


  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  render(){
    return (
      <div className="App">
        <h1>Welcome to the Redux Store</h1>

        <Switch>
          <Route path="/login" render={this.renderForm} />
          <Route path="/register" render={this.renderForm} />

          <Route path="/chips" render={() => {
              return (<div> <ChipForm /><ChipContainer /> </div>)
          }} />
        </Switch>

      </div>
    );
  }

}


// thunky Action Creators
let persistUser = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/persist", {
      headers: {
        "Authorization": `bearer ${localStorage.token}`
      }
    })
      .then(r => r.json())
      .then(resp => {
        localStorage.token = resp.token
        dispatch(setUserInformation(resp))
      })
  }
}



// regular Action Creators

let setAllChips = (chipsArr) => {
  return {
    type: "SET_ALL_CHIPS",
    payload: chipsArr
  }
}

let setUserInformation = (userInfo) => {
  return {
    type: "SET_USER_INFORMATION",
    payload: userInfo
  }
}





let sendThisInformation = { setAllChips, setUserInformation, persistUser }


export default connect(null, sendThisInformation)(App);
