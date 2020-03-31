import React from 'react'

class BirdCharacter extends React.Component{

  render(){
    return(
      <div className="container">
        <img src="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/animals/241-vector-cute-cartoon-bird-image.png?w=800&q=95" alt="bird" />
        <h2>Character: { this.props.name } </h2>
        <p>Show: {this.props.show} </p>
        <button onClick={ this.handleClickOfAButton }>
          Watched {0} times
        </button>
      </div>
    )
  }


}


export default BirdCharacter
