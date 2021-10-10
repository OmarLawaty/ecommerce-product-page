import React, { useState, useRef, useEffect } from 'react';
import { Slider, Cart, BoughtAmount, Header } from './components/Index';

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

  useEffect(() => {
    if (payments.length > 0)
      setTotalItems(payments.reduce((acc, item) => item.amount + acc, 0));
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
    <div>
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
        title="whe"
        image={firstImageThumbnail}
        price={125}
      />
      <Slider thumbnail={thumbnail} preview={preview} reference={previewRef} />
    </div>
  );
};

export default App;
