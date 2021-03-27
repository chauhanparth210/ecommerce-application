import React from 'react';
import { Heading, Button } from '@innovaccer/design-system';

const Cart = ({ cart }) => {
  const EmptyCart = () => {
    return (
      <Heading appearance="default" size="l">
        You have no items in your shopping cart, start adding some!
      </Heading>
    );
  };

  const FilledCart = () => {
    return (
      <div className="w-100 d-flex align-items-center justify-content-between">
        <div>
          <Heading appearance="default" size="xl">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Heading>
        </div>
        <div className="d-flex ml-6">
          <Button appearance="alert">EMPTY CART</Button>
          <Button className="ml-6" appearance="primary">
            CHECKOUT
          </Button>
        </div>
      </div>
    );
  };

  if (!cart.line_items) return 'Loading';

  return (
    <div className="mt-10 px-10 py-6 mb-5">
      <Heading appearance="default" size="xxl" className="mb-8">
        Your shopping cart!
      </Heading>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
