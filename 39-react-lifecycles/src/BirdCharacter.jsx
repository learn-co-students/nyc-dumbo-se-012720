import React from 'react'

class BirdCharacter extends React.Component{

  state = {
    status: "liked"
  }


  componentDidUpdate(prevVersionOfProps, prevVersionOfState) {
    // current props and state
    // this.props && this.state


    // past props and state
    // prevProps && prevState (first argument && second argument)

    if (prevVersionOfProps.bird.watched > this.props.bird.watched) {
      this.setState({
        status: "disliked"
      })
    }

    if (prevVersionOfProps.bird.watched < this.props.bird.watched) {
      this.setState({
        status: "liked"
      })
    }

  }


  componentWillUnmount() {
    console.log(this.props.bird.name, "SAYS GOODBYE");
  }


  handleDelete = (evt) => {
    this.props.deleteACharacter(this.props.bird.name)
  }

  handleWatch = (evt) => {
    let randomNumber = Math.random() < 0.5 ? -20 : 45

    this.props.updateACharacter(this.props.bird.name, randomNumber)
  }


  render(){
    let {name, show, watched} = this.props.bird
    let {status} = this.state
    return (
      <div className={`container ${status}`}>
        <img src="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/animals/241-vector-cute-cartoon-bird-image.png?w=800&q=95" alt="bird" />
        <button className="delButton" onClick={ this.handleDelete }>
          X
        </button>
        <h2>Character: { name } </h2>
        <p>Show: { show } </p>
        <button onClick={ this.handleWatch }>
          {watched === 0
            ?
              "You never watched this"
            :
             `Watched ${watched} times`
          }
        </button>
      </div>
    )
  }

}


export default BirdCharacter
