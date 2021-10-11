import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Slider, Cart, BoughtAmount, Header } from './components/Index';
import './App.scss';

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

  const delItem = i =>
    setPayments(payments.filter((item, index) => i !== index));

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

      {open ? (
        <Cart payments={payments} delItem={delItem} reference={cartRef} />
      ) : (
        ''
      )}
      <BoughtAmount
        setPayments={setPayments}
        payments={payments}
        title="Fall Limited Edition Sneakers"
        image={firstImageThumbnail}
        price={125}
      />
      {/* <Slider thumbnail={thumbnail} preview={preview} reference={previewRef} /> */}
    </div>
  );
};

export default App;
