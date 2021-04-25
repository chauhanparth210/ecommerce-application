import React from 'react';
import { Heading, Card, Text, Button, Column } from '@innovaccer/design-system';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const { id, media, name, line_total, quantity } = item;

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Column size="12">
      <Card shadow="medium" className="mx-7 my-5 d-flex">
        <Column size="3" sizeXS="4" sizeS="4" sizeM="4" sizeL="3" sizeXL="3">
          {media.source && (
            <div className="d-flex align-items-center overflow-hidden bg-secondary-lightest cart-image">
              <img src={media.source} alt={name} className="w-100" />
            </div>
          )}
        </Column>
        <div className="ml-4 p-4 d-flex flex-grow-1 flex-wrap justify-content-between">
          <Heading size="l">{name}</Heading>
          <div className="d-flex flex-column justify-content-between">
            <Button
              appearance="alert"
              icon="delete"
              className="align-self-end"
              onClick={() => handleRemoveFromCart(item.id)}
            />
            <div
              className="d-flex align-items-end justify-content-between"
              style={{ width: '230px' }}
            >
              <div className="show-quantity">
                <Text
                  size="large"
                  weight="medium"
                  className="mb-4"
                  appearance="subtle"
                >
                  Quantity
                </Text>
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
              </div>
              <Heading size="m" appearance="subtle">
                {line_total.formatted_with_symbol}
              </Heading>
            </div>
          </div>
        </div>
      </Card>
    </Column>
  );
};

export default CartItem;
