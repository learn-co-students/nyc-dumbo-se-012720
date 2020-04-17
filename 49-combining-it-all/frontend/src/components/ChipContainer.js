import React from 'react';
import Chip from './Chip'

import {connect} from 'react-redux'


const ChipContainer = (props) => {
  console.log("PROPS OF CONTAINER", props )

  let arrayOfComponents = props.chips.map((chipObj) => {
    return <Chip
      key={chipObj.name}
      chip={chipObj}
    />
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



// the return value of mapStateToProps is an object that will be merged into ChipContainer's props
let mapStateToProps = (reduxState) => {
  return {
    chips: reduxState.chips
  }
}



// first argument of connect is mapStateToProps
  // mapStateToProps is a function that will take in reduxState and make them the props
let funcName = connect(mapStateToProps)
let magicalComponent = funcName(ChipContainer)
export default magicalComponent;

// export default connect(mapStateToProps)(ChipContainer)


















// 
