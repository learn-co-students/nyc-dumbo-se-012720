import React from 'react'
import BirdCharacter from './BirdCharacter'

const BirdCharacterContainer = (props) => {
  return(
    <div>
      <h3>{ props.title }</h3>

      <BirdCharacter
        name="Big Bird"
        show="Sesame Street"
        num={21}
        bool={true || false}
        arr={ [1,2,3] }
        obj={ {this: "Is an object"} }
        funcDef = { () => {} }
      />
      <BirdCharacter name="Tweety Bird" show="Looney Toons"/>
      <BirdCharacter name="Bird Person" show="Rick and Morty"/>
      <BirdCharacter name="The Giant Fighting Chicken" show="Family Guy"/>
    </div>
)
}

export default BirdCharacterContainer
