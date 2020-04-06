import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }


  handlePicClick = (evt) => {
    this.setState({
      clicked: !this.state.clicked
    })

    // this.setState((prevState) => {
      // return {
      //   clicked: !prevState.clicked
      // }
    // })
  }

  render() {
    let {name, twitter, pictureUrl, born, fromUSA, bio, quote} = this.props.planeteer
    let currentYear = new Date().getFullYear()
    let placeOfWork = fromUSA ? <p>From USA</p> : <p>Working Overseas</p>
    let theThingToShow = this.state.clicked ? quote : bio

    return (
      <li className="cards__item">
        <div className="card">
          <img
            src={pictureUrl}
            alt={name}
            className="card__image"
            onClick={this.handlePicClick}
          />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{theThingToShow}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {currentYear - born}</p>
              { placeOfWork }
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
