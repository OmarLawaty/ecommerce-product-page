import React from 'react';

import './ProductInfo.scss';
import { toDollar } from '../../utils/helpers';
import { products, thumbnail } from '../../utils/productData';
import { BoughtAmount } from '../Index';

const ProductInfo = ({ setPayments, payments }) => {
  const { comapny, name, description, priceAfterDiscount, discount, price } =
    products[0];

  return (
    <div className="product-info">
      <p className="product-company">{comapny}</p>

      <h1 className="product-name">{name}</h1>

      <p className="product-description">{description}</p>

      <p className="product-price">
        <span className="discount-info">
          <span className="price-after-discount">
            {toDollar(priceAfterDiscount)}
          </span>

          <span className="discount">{discount}%</span>
        </span>

        <span className="price">{toDollar(price)}</span>
      </p>

      <BoughtAmount
        setPayments={setPayments}
        payments={payments}
        title={name}
        image={thumbnail[0]}
        price={priceAfterDiscount ? priceAfterDiscount : price}
      />
    </div>
  );
};

export default ProductInfo;
