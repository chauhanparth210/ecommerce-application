import React from 'react';
import Product from './Product/Product';
import { Row } from '@innovaccer/design-system';

const Products = ({ products, onAddToCart }) => {
  // className="d-flex flex-wrap gap mt-10 px-8 py-6 mb-5"
  return (
    <Row className="mt-10 mb-8 pt-7 px-5">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </Row>
  );
};

export default Products;
