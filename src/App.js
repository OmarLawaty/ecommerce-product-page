import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

import { Slider, Cart, Header, ProductInfo } from './components/Index';

const App = () => {
  const [payments, setPayments] = useState([]),
    [totalItems, setTotalItems] = useState(0),
    [open, setOpen] = useState(false);

  const cartDropdownRef = useRef(),
    cartRef = useRef(),
    previewRef = useRef();

  useLayoutEffect(() => {
    setTotalItems(payments.reduce((acc, { amount }) => amount + acc, 0));
  }, [payments]);

  useEffect(() => {
    const onBodyClick = e => {
      if (
        cartDropdownRef.current.contains(e.target) ||
        (cartRef.current && cartRef.current.contains(e.target))
      )
        return;
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
        <Slider reference={previewRef} />

        <ProductInfo setPayments={setPayments} payments={payments} />
      </main>
    </div>
  );
};

export default App;
