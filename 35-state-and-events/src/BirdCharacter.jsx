import React from 'react'

class BirdCharacter extends React.Component{

  // state is a POJO containing information about components that can be changed
  state={
    likes: 24,
    favoriteTVShow: false
  }

  handleClickOfAButton = (evt) => {
    // event handlers being passed in as a callback has access to the evt object
      // event handlers should be arrow functions to get the appropriate `this`

    // console.log(evt);
    // console.log(this.props);

    // Do NOT mutate state directly
    // this.state.likes += 1

// setState takes in two arguments:
  // 1) Either a POJO or a callback that returns a POJO
  // 2) A callback to be executed after state changes
    // state changes -> rerender -> the callback
    // Before, render, after


// WAY 1
// setState is a function that merges the partialState to the oldState
  // the key-value pairs defined in partialState take priority

    let partialState = {likes: this.state.likes + 1}
    console.log(this.state, "BEFORE");

    this.setState(partialState, () => {
      console.log(this.state, "AFTER");
    })


// WAY 2
  // use functional setState when your new state value is dependent on the old state value
  // functional setState
    // first argument is a callback
      // the return value of that callback should be an object
      // and that object is merged to the oldState


  // let callback = (prevState) => {
  //   return {
  //     likes: prevState.likes + 1
  //   }
  // }
  //
  // this.setState(callback)


  }

  render(){
    console.log(this.state, "RENDER");
    return(
      <div className="container">
        <img src="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/animals/241-vector-cute-cartoon-bird-image.png?w=800&q=95" alt="bird" />
        <h2>Character: { this.props.name } </h2>
        <p>Show: {this.props.show} </p>
        <button onClick={ this.handleClickOfAButton }>
          Watched {this.state.likes} times
        </button>
      </div>
    )
  }


}


export default BirdCharacter
