import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

import { Slider, Cart, BoughtAmount, Header } from './components/Index';
import './App.scss';
import { toDollar } from './utils/helpers/helpers';

import {
  firstImage,
  firstImageThumbnail,
  secondImage,
  secondImageThumbnail,
  thirdImage,
  thirdImageThumbnail,
  forthImage,
  forthImageThumbnail
} from './assets';

const App = () => {
  const [payments, setPayments] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [open, setOpen] = useState(false);

  const cartDropdownRef = useRef();
  const cartRef = useRef();
  const previewRef = useRef();

  useLayoutEffect(() => {
    setTotalItems(payments.reduce((acc, { amount }) => amount + acc, 0));
  }, [payments]);

  useEffect(() => {
    const onBodyClick = e => {
      if (cartDropdownRef.current.contains(e.target)) return;
      if (cartRef.current && cartRef.current.contains(e.target)) return;
      else setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, {
      capture: true
    });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true
      });
    };
  }, []);

  const products = [
    {
      comapny: 'sneaker company',
      name: 'fall limited edition sneakers',
      description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.`,
      price: 250,
      discount: 50,
      priceAfterDiscount: 125
    }
  ];

  const thumbnail = [
    firstImageThumbnail,
    secondImageThumbnail,
    thirdImageThumbnail,
    forthImageThumbnail
  ];

  const preview = [firstImage, secondImage, thirdImage, forthImage];

  return (
    <div className="app">
      <Header
        setOpen={setOpen}
        reference={cartDropdownRef}
        open={open}
        totalItems={totalItems}
      />

      <main>
        {open && (
          <Cart
            payments={payments}
            setPayments={setPayments}
            reference={cartRef}
          />
        )}
        <Slider
          thumbnail={thumbnail}
          preview={preview}
          reference={previewRef}
        />
        <div className="product-info">
          <p className="product-company">{products[0].comapny}</p>
          <h1 className="product-name">{products[0].name}</h1>
          <p className="product-description">{products[0].description}</p>
          <p className="product-price">
            <span className="discount-info">
              <span className="price-after-discount">
                {toDollar(products[0].priceAfterDiscount)}
              </span>
              <span className="discount">{products[0].discount}%</span>
            </span>
            <span className="price">{toDollar(products[0].price)}</span>
          </p>
          <BoughtAmount
            setPayments={setPayments}
            payments={payments}
            title={products[0].name}
            image={firstImageThumbnail}
            price={
              products[0].priceAfterDiscount
                ? products[0].priceAfterDiscount
                : products[0].price
            }
          />
        </div>
      </main>
    </div>
  );
};

export default App;
