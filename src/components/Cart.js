import React from 'react'
import "./Cart.css";
import Header from './Header';
import { useState } from 'react';
function Cart({ itemCart }) {
  const [data, setData] = useState(itemCart)

  const addQty = (id) => {
    const newItem = data.map((item) =>
      id === item.id
        ? { ...item, qty: item.qty + 1, offerPrice: item.offerPrice + (item.offerPrice / item.qty) }
        : item
    );
    setData(newItem);
  };

  const decQty = (id) => {
    const newItem =
      data.map((item) => (

        id === item.id && item.qty > 1 ? { ...item, qty: item.qty - 1, offerPrice: item.offerPrice = item.offerPrice - (item.offerPrice / item.qty) } : item
      ))
    setData(newItem)
  }

  const removeItem = (id) => {
    const updatedCart = data.filter((item) => item.id !== id);
    setData(updatedCart);
  };

  console.log(itemCart, "itemCard");
  return (
    <div>
      <Header />
      <div className='cart-items'>
        <div className='cart-items-header'>Add Cart items here</div>


        {itemCart.length === 0 && (
          <div className='cart-items-empty'>
            <img className='imageEmpty'

              src="https://shop.millenniumbooksource.com/static/images/cart1.png" />
          </div>


        )}
        <div>
          
          {data.map((item) => (



            <div key={item.id} className="cart-item">
              <img src={item.image} alt="no img" />
              <div className="product-details">
              <div className="name-price">
          <div className="product-name"><h3>{item.name}</h3></div>
          <div className="product-price"><h3>{item.offerPrice}</h3></div>
        </div>
            
              </div>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={()=>decQty(item.id)}>-</button>
                <div className="quantity-input" >{item.qty}</div>
                <button className="quantity-btn" onClick={()=>addQty(item.id)}>+</button>
                <button className="remove-btn" onClick={()=>removeItem(item.id)}>Remove</button>
              </div>
            </div>

            /*<div key={item.id} className="cart-items-list">
              <img 
              className='cart-item-image'
               src={item.image} 
               alt={item.name}

              />
              <div className='cart-item-name'>{item.name}</div>
              <div className='cart-item-qty'>{item.qty}</div>
              <div className='cart-item-offerprice'>{item.offerPrice}</div>
              
              <button onClick={()=>addQty(item.id)}>+</button>
              <button onClick={()=>decQty(item.id)} >-</button>
              <button className='removebtn' onClick={()=>removeItem(item.id)}>remove item</button>
            </div>*/
          ))}
        </div>
      </div>
    </div>

  );
};

export default Cart