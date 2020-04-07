import React from 'react';

const Bird = (props) => {

  const handleClick = (evt) => {
    props.addAnExclamationMarkTo(props.bird.name);
  }

  return (
    <li onClick={handleClick}>
      {props.bird.name}
    </li>
  )
}

export default Bird;
