import React from 'react'

class BirdCharacter extends React.Component{


  handleDelete = (e) => {
    this.props.deleteACharacter(this.props.bird.name)
  }

  handleWatch = (evt) => {
    this.props.updateACharacter(this.props.bird.name, 7)
  }


  render(){
    let {name, show, watched} = this.props.bird
    return (
      <div className="container">
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
