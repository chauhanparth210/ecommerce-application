import React, { useState } from 'react';
import { Heading, Button, Row, Dialog } from '@innovaccer/design-system';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const [openDialog, setDialog] = useState(false);

  const onClose = () => {
    setDialog(!openDialog);
  };

  const handleEmptyCart = () => {
    onEmptyCart().then((response) => {
      onClose();
    });
  };

  const options = {
    open: openDialog,
    onClose,
    heading: 'Empty cart',
    description: 'Are you sure you want to empty this cart ?',
    primaryButtonAppearance: 'alert',
    primaryButtonLabel: 'Empty cart',
    secondaryButtonLabel: 'Cancel',
    primaryButtonCallback: handleEmptyCart,
    secondaryButtonCallback: onClose,
  };

  const EmptyCart = () => {
    return (
      <Heading appearance="default" size="l" className="mx-7 mt-5">
        You have no items in your shopping cart,{' '}
        <Link to="/">start adding some!</Link>
      </Heading>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Row>
          {cart.line_items.map((item) => (
            <CartItem
              item={item}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
              key={item.id}
            />
          ))}
        </Row>
        <div className="d-flex align-items-center justify-content-around flex-wrap mx-7 mt-5 px-4 py-6 bg-secondary-lightest">
          <Heading appearance="default" size="xl">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Heading>
          <div className="d-flex">
            <Dialog {...options} />
            <Button
              appearance="alert"
              size="large"
              onClick={() => setDialog(true)}
            >
              Empty cart
            </Button>
            <Link to="/checkout" className="remove-text-decoration">
              <Button className="ml-6" appearance="primary" size="large">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return 'Loading...';

  return (
    <div className="mt-10 mb-8 pt-6 px-5">
      <Heading appearance="default" size="xl" className="mx-7">
        Your shopping cart!
      </Heading>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
