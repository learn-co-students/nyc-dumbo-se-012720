import React from 'react'
import BirdCharacter from './BirdCharacter'

const BirdCharacterContainer = (props) => {

  let arrayOfComponents = props.birds.map((singleBirdPojo) => {
    return <BirdCharacter
      key={singleBirdPojo.name}
      bird={singleBirdPojo}
    />
  })

  return(
    <div>
      <h3>{ props.title }</h3>
      { arrayOfComponents }
    </div>
)
}

export default BirdCharacterContainer
