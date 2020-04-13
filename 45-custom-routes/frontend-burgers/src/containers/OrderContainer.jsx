import React from 'react';
import SingularBurger from '../ProfileComponents/SingularBurger'

const OrderContainer = (props) => {
  let {burgers} = props

  let totalSum = burgers.reduce((acc, burger) => {
    return acc + burger.price
  }, 0)


  const handleClick = (e) => {
    console.log("Submitted the order! How do we make that persist?");
    const burger_ids = burgers.map(burger => burger.id)
    console.log(burger_ids);

    fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "content-type": 'application/json',
        "Authorization": `bearer ${props.token}`
      },
      body: JSON.stringify({
        burger_ids: burger_ids
      })
    })
      .then(r => r.json())
      .then((newOrder) => {
        props.addNewOrder(newOrder)
      })




  }


  return (
    <div className="order">
      <h2>Your Orders</h2>
      <ul id="order-list">
        {burgers.map((burger, index) => <SingularBurger key={index} burger={burger}/>)}
      </ul>

      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <button onClick={handleClick} className="submit">Place an Order </button>
    </div>
  )
}

export default OrderContainer;
