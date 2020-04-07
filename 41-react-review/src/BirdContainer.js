import React from 'react';
import Bird from './Bird'


const BirdContainer = (props) => {

  let arrayOfComponents = props.birds.map((bird) => {
    return <Bird key={bird.name} bird={bird} addAnExclamationMarkTo={props.addAnExclamationMarkTo} />
  })

  return(
    <ul>
      {arrayOfComponents}
    </ul>
  )
};

export default BirdContainer;
