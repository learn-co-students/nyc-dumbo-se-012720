import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {


  console.log(props);


  let arrayOfPlaneteerComponents = props.planeteers.map((planeteerPOJO) => {
    return <Planeteer
      key={planeteerPOJO.id}
      planeteer={planeteerPOJO}
    />
  })


  return (
    <ul className="cards">
      {
        arrayOfPlaneteerComponents
      }
    </ul>
  )

};

export default PlaneteersContainer;
