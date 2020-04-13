import React from 'react';
import SingularBurger from './SingularBurger'


class Order extends React.Component{

  state={
    clicked: false
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div className="card" >
        <h4 onClick={this.handleClick}>{
            this.props.order.nice_timestamp
          }</h4>
        {
          this.state.clicked
            ?
          <ul className="burgersList">
            {
              this.props.order.burger_orders.map((burger_order) => {
                return <SingularBurger
                  key={burger_order.id}
                  burger={burger_order.burger}
                />
              })
            }
          </ul>
            :
          null
        }
      </div>
    )
  }
}


export default Order;
