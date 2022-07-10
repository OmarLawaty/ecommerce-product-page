import { useParams } from 'react-router-dom';

import history from '../utils/history';
import products from '../utils/products/products';
import { ProductInfo, ProductPreview } from '../components';
import { ProductNotFound } from './ProductNotFound';

export const Product = ({ cart, setCartItem }) => {
  const productId = useParams().id;

  const setProduct = () => {
    const product = products.filter(product => product.id.toString() === productId);

    console.log(product);

    if (product.length) return product[0];

    history.push('/products/notfound');
  };

  const product = setProduct();

  return product ? (
    <>
      <ProductPreview product={product} cart={cart} />
      <ProductInfo product={product} setCartItem={setCartItem} />
    </>
  ) : (
    <ProductNotFound />
  );
};
