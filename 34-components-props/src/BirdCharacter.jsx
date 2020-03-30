import React from 'react'

// extends is Javascript's inherit
class BirdCharacter extends React.Component{



  render(){
    console.log(this.props);
    return(<div>
      <h4>Character: { this.props.name } </h4>
      <p>Played in: {this.props.show} </p>
    </div>)
  }


}


export default BirdCharacter
