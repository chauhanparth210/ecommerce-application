import React from 'react';
import { Heading, Card, Text, Button } from '@innovaccer/design-system';

const CartItem = ({ item }) => {
  const { media, name, price, quantity } = item;
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
          <Button appearance="basic" icon="add" size="regular" />
          <Text className="mx-5">{quantity}</Text>
          <Button appearance="basic" icon="remove" size="regular" />
        </div>
        <Button appearance="alert">Remove</Button>
      </div>
    </Card>
  );
};

export default CartItem;
