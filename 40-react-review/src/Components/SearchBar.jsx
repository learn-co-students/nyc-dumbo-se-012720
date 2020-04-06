import React from 'react';

class SearchBar extends React.Component {

  handleType = (evt) => {
    this.props.changeSearchTerm(evt.target.value);
  }

  render() {
    return (
      <div className="search">
       <input
         type="text"
         className="searchTerm"
         placeholder="Who would you like to search for?"
         value={this.props.searchTerm}
         onChange={this.handleType}
        />
      </div>
    );
  }

}

export default SearchBar;
