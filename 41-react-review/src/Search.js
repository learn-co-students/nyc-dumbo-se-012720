import React from 'react';

const Search = (props) => {

  const sendInformationUp = (evt) => {
    props.changeBottomSearchTerm(evt.target.value)
  }

  return (
    <input
      type="text"
      value={props.bottomSearchTerm}
      onChange={sendInformationUp}
    />
  );

}

export default Search;
