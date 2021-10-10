import React from 'react';

import { del } from '../../assets';

const Cart = ({ payments, delItem, reference }) => {
  const toDollar = num =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);

  return (
    <div ref={reference}>
      {payments.map(({ title, image, price, amount }, i) => (
        <div key={i}>
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
          <div className="delete" onClick={() => delItem(i)}>
            <img src={del} alt="delete icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
