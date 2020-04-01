import React, { Component } from 'react';

class NewBirdForm extends Component {

  render() {
    return (
      <form>
        <label htmlFor="c_name">Character Name:</label>
        <input
          id="c_name"
          type="text"
          name="name"
          autoComplete="off"
        />
        <label htmlFor="show">Show</label>
        <input
          id="show"
          type="text"
          name="show"
          autoComplete="off"
        />
        <input type="submit" value="Log New Bird Character"/>
      </form>
    )
  }
  
}

export default NewBirdForm;
