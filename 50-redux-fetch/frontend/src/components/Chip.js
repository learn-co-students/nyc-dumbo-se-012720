import React, { Component } from 'react';
import {connect} from 'react-redux'


class Chip extends Component {


  handleClick = (e) => {
    this.props.removeChip(this.props.chip.name)
  }

  render() {
    let {name, brand} = this.props.chip

    return (
      <li onClick={this.handleClick}>
        {name} made by <strong>{brand}</strong>
      </li>
    );
  }

}








const removeChip = (chipName) => {
  return {
    type: "REMOVE_CHIP",
    payload: chipName
  }
}


const mapDispatchToProps = {
  removeChip: removeChip

}

export default connect(null, mapDispatchToProps)(Chip);
