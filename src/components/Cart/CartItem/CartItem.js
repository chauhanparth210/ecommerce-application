import React from 'react';
import { Heading, Card, Text, Button } from '@innovaccer/design-system';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const { id, media, name, price, quantity } = item;

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card shadow="light" className="d-flex flex-column px-5 py-4">
      {media.source && (
        <img src={media.source} alt={name} height="260" className="w-100" />
      )}
      <div className="d-flex justify-content-between mt-4">
        <Heading size="l">{name}</Heading>
        <Heading size="m" appearance="subtle">
          {price.formatted_with_symbol}
        </Heading>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-6">
        <div className="d-flex align-items-center">
          <Button
            appearance="basic"
            icon="add"
            size="regular"
            onClick={() => handleUpdateCartQty(id, quantity + 1)}
          />
          <Text className="mx-5">{quantity}</Text>
          <Button
            appearance="basic"
            icon="remove"
            size="regular"
            onClick={() => handleUpdateCartQty(id, quantity - 1)}
          />
        </div>
        <Button
          appearance="alert"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;
