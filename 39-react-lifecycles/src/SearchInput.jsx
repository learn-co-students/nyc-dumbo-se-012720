import React from 'react'

const SearchInput = (props) => {


  let callbackFunc = (evt) => {
    // console.log(evt);
    // console.log(evt.target);
    props.changeSearchTerm(evt.target.value);
    
  }


  return(
    <div className="search-box">
      <input
        type="text"
        value={props.searchTerm}
        onChange={callbackFunc}
      />
    </div>
  )
}

export default SearchInput
