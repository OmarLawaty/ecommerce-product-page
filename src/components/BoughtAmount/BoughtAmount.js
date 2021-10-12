import React, { useState } from 'react';

import { minus, plus, cart } from '../../assets/index';
import './BoughtAmount.scss';

const BoughtAmount = ({ payments, setPayments, title, image, price }) => {
  const [amount, setAmount] = useState(1);

  const checkForRepeatation = () => {
    let index = payments.reduce(
      (acc, item, i) => (item.title === title ? (acc = i) : acc),
      undefined
    );

    if (index === true || index >= 0) {
      setPayments(() =>
        payments.map((item, i) =>
          i === index
            ? {
                title: item.title,
                image: item.image,
                price: item.price,
                amount: item.amount + amount
              }
            : item
        )
      );
    } else setPayments([...payments, { title, image, price, amount }]);
  };

  return (
    <div className="product-amount">
      <div className="amount-to-buy">
        <button
          className="decrease"
          onClick={() => amount !== 1 && setAmount(amount - 1)}
        >
          <img src={minus} alt="minus icon" />
        </button>
        <span className="amount">{amount}</span>
        <button className="increase" onClick={() => setAmount(amount + 1)}>
          <img src={plus} alt="plus icon" />
        </button>
      </div>

      <button className="add-to-cart" onClick={() => checkForRepeatation()}>
        <div className="cart">
          <img src={cart} alt="cart icon" />
        </div>
        <span> Add to cart</span>
      </button>
    </div>
  );
};

export default BoughtAmount;
