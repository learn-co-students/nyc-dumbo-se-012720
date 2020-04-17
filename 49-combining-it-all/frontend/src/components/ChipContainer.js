import React from 'react';
import Chip from './Chip'

import {connect} from 'react-redux'


const ChipContainer = (props) => {
  console.log("PROPS OF CONTAINER", props )

  let arrayOfComponents = props.theKeyOfChips.map((singleChip) => {
    return <Chip key={singleChip.name} chip={singleChip} />
  })

  return (
    <>
      <h2>Chip Container</h2>
      <ul>
        {arrayOfComponents}
      </ul>
    </>
  )
};


const mstp = (reduxState) => {

  console.log(reduxState);


  return {
    theKeyOfChips: reduxState.chipInformation.chips
  }
}

export default connect(mstp)(ChipContainer)


















//
