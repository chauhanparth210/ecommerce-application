import React from 'react';
import Product from './Product/Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="d-flex flex-wrap gap mt-10 px-8 py-6 mb-5">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default Products;
