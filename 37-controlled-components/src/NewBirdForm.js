import React, { Component } from 'react';

class NewBirdForm extends Component {

  state = {
    name: "Harvey Birdman",
    show: "Attorney At Law"
  }

  // handleNameChange = (evt) => {
  //   this.setState({
  //     name: evt.target.value
  //   })
  // }

  // handleShowChange = (evt) => {
  //   this.setState({
  //     show: evt.target.value
  //   })
  // }

  handleAllInputs = (evt) => {
    // let partialState = {
    //   [evt.target.name]: evt.target.value
    // }
    // console.log(partialState);
    //
    // this.setState(partialState)
    console.log(evt);
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    // `this` is an instance of NewBirdForm
    this.props.addOneCharacter(this.state)
  }


  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="c_name">Character Name:</label>
        <input
          id="c_name"
          type="text"
          name="name"
          autoComplete="off"
          value={this.state.name}
          onChange={this.handleAllInputs}
        />
        <label htmlFor="show">Show</label>
        <input
          id="show"
          type="text"
          name="show"
          autoComplete="off"
          value={this.state.show}
          onChange={this.handleAllInputs}
        />
        <input type="submit" value="Log New Bird Character"/>
      </form>
    )
  }

}

export default NewBirdForm;
