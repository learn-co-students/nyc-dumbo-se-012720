import React from 'react'

class BirdCharacter extends React.Component{

  render(){
    let {name, show, watched} = this.props.bird
    return (
      <div className="container">
        <img src="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/animals/241-vector-cute-cartoon-bird-image.png?w=800&q=95" alt="bird" />
        <h2>Character: { name } </h2>
        <p>Show: { show } </p>
        <button>
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
