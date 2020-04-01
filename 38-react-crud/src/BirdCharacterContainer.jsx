import React from 'react'
import BirdCharacter from './BirdCharacter'

const BirdCharacterContainer = (props) => {

  console.log(props, "BIRD CHARACTER CONTAINER PROPS");

  let arrayOfComponents = props.birds.map((singleBirdPojo) => {

    return <BirdCharacter
      key={singleBirdPojo.name}
      bird={singleBirdPojo}
      deleteACharacter={props.deleteACharacter}
      updateACharacter={props.updateACharacter}

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
