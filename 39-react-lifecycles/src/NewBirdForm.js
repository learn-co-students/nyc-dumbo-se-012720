import React, { Component } from 'react';

class NewBirdForm extends Component {

  state = {
    name: "Harvey Birdman",
    show: "Attorney At Law"
  }


  handleAllInputs = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addOneCharacter(this.state)
  }


  render() {
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
