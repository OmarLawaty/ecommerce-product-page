import React from 'react';

import './Cart.scss';
import { toDollar } from '../../utils/helpers/helpers';

import { del } from '../../assets';

const Cart = ({ setPayments, payments, reference }) => (
  <div ref={reference} className="cart-menu">
    <h1 className="title">Cart</h1>
    {payments.length > 0 ? (
      payments.map(({ title, image, price, amount }, i) => (
        <div key={i} className="item">
          <div className="info">
            <div className="cart-item-thumbnail">
              <img src={image} alt="thumbnail" />
            </div>
            <h2>{title}</h2>
            <p>
              <span>{toDollar(price)}</span> x <span>{amount}</span>{' '}
              <span className="total-price">{toDollar(price * amount)}</span>
            </p>
          </div>
          <div
            className="delete"
            onClick={() =>
              setPayments(payments.filter((item, index) => i !== index))
            }
          >
            <img src={del} alt="delete icon" />
          </div>
        </div>
      ))
    ) : (
      <p className="empty-cart">Your cart is empty</p>
    )}
    {payments.length > 0 ? <button className="checkout">Checkout</button> : ''}
  </div>
);

export default Cart;
