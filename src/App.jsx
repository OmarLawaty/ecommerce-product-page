import { useState } from 'react';
import { Container } from '@chakra-ui/react';

import { Routes, Route, Navigate } from 'react-router-dom';

import products from './utils/products/products';
import { Header, ProductPreview, ProductInfo } from './components';

const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const setCartItem = (newItem = null, clearItem = false, clearCart = false) => {
    let updateItemIndex = null;
    let filteredCart = cart.filter((cartItem, index) => {
      if (newItem.id === cartItem.id) updateItemIndex = index;

      return cartItem.id !== newItem.id;
    });

    if (clearCart) {
      setCart([]);
      localStorage.setItem('cart', JSON.stringify([]));
      return;
    }

    if (clearItem) {
      setCart(filteredCart);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return;
    }
    if (newItem === null) return;

    if (updateItemIndex === null) {
      setCart([...cart, newItem]);
      localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
    }
    if (typeof updateItemIndex === 'number') {
      cart[updateItemIndex].amount = cart[updateItemIndex].amount + newItem.amount;
      setCart([...filteredCart, cart[updateItemIndex]]);

      localStorage.setItem('cart', JSON.stringify([...filteredCart, cart[updateItemIndex]]));
    }
  };

  const product = products[0];

  return (
    <>
      <Header cart={cart} setCartItem={setCartItem} />

      <Container
        as="main"
        display="flex"
        flexDir={['column', null, 'row']}
        justifyContent="space-between"
        px={['0', null, '16']}
        py={['0', null, '20']}
        gap={[null, null, '12', '20']}
        mb="24"
      >
        <Routes>
          <Route path="*" element={<Navigate to={`/products/${product.id}`} />} />
          <Route
            path={`/products/${product.id}`}
            element={
              <>
                <ProductPreview product={product} cart={cart} />
                <ProductInfo product={product} setCartItem={setCartItem} />
              </>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
