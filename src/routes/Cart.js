import React from 'react';
import styled from "styled-components"

const Button = styled.button`
    background: white;
    padding: 10px;
    margin-right: 20px;
    border: 2px solid black;
    transition: 500ms ease;
    color: black;
    text-decoration: none;
    font: 1rem Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    box-shadow: 2px 2px;

    

    &:hover {
        background: black;
        color: white;
        border: none;
        transform: scale(1.2);
        box-shadow: 2.2px 2.2px grey;
    }
    `;

function Cart({ cartItems, onAdd, onRemove }) {
  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.04;
//   const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice ;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <img className="col-2 cartimg" src={item.image} />
            <div className="col-2 cartname">{item.name}</div>
            <div className="col-2 itembutton">
              <Button onClick={() => onRemove(item)} className="remove">
                -
              </Button>{item.qty}
              
              <Button onClick={() => onAdd(item)} className="add">
                +
              </Button>
            </div>

            <div className="col-2 text-right item-position">
              ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;