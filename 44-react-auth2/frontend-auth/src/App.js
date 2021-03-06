import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {withRouter, Redirect} from 'react-router-dom'



class App extends React.Component {

  state = {

    user: {
      id: 0,
      username: "",
      cheesecakes: []
    },
    token: ""
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

  logSomeonOut = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        cheesecakes: []
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
        this.props.history.push("/profile")
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
      return <ProfileContainer
        user={this.state.user}
        token={this.state.token}
        addOneCheesecake={this.addOneCheesecake}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }


  addOneCheesecake = (newCheesecake) => {

    let copy = [...this.state.user.cheesecakes, newCheesecake]

    this.setState({
      user: {
        ...this.state.user,
        cheesecakes: copy
      }
    })

  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App)
















//
