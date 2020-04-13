import React from 'react';
import './App.css';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

import NavBar from './components/NavBar'
import Form from './components/Form'
import BurgerContainer from './containers/BurgerContainer'

class App extends React.Component {

  state = {

    user: {
      id: 0,
      username: "",
      orders: []
    },
    token: "",
    burgers: []
  }

  componentDidMount(){

    if (localStorage.token) {

      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }

    fetch("http://localhost:4000/burgers")
      .then(r => r.json())
      .then(burgers => {
        this.setState({
          burgers: burgers
        })
      })
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



  handleLogout = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        orders: []
      },
      token: ""
    })
    localStorage.clear()
  }


  handleResponse = (resp) => {
    if (!resp.message) {
      localStorage.token = resp.token
      this.setState({
        user: resp.user,
        token: resp.token
      }, () => {
        this.props.history.push("/burgers")
      })
    }
    else {
      alert(resp.message)
    }

  }


  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }



  renderProfile = (routerProps) => {

    if (this.state.token) {
      return <BurgerContainer
        burgers={this.state.burgers}
        user={this.state.user}
        token={this.state.token}
        addNewOrder={this.addNewOrder}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }




  addNewOrder = (newlyCreatedOrder) => {
    let copy = [...this.state.user.orders, newlyCreatedOrder]

    this.setState({
      user: {
        ...this.state.user,
        orders: copy
      }
    })
  }




  render(){
    return (
      <div className="App">
        <NavBar/>
        {this.state.token && <button onClick={this.handleLogout}>Log out</button>}
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm }/>
          <Route path="/burgers" render={ this.renderProfile } />
          <Route path="/" exact render={() => <h1>Home</h1>} />
        </Switch>
      </div>
    )
  }

}

export default withRouter(App)  ;
