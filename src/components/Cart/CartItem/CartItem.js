import React, { useState, useEffect } from 'react';
import {
  Heading,
  Card,
  Text,
  Button,
  Column,
  Row,
} from '@innovaccer/design-system';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const { id, media, name, line_total, quantity } = item;

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const updateDimensions = () => {
    setInnerWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const DesktopView = () => {
    return (
      <Column size="12">
        <Card shadow="medium" className="mx-7 my-5 d-flex">
          <Row>
            <Column
              size="3"
              sizeXS="4"
              sizeS="4"
              sizeM="4"
              sizeL="3"
              sizeXL="3"
            >
              {media.source && (
                <div className="d-flex align-items-center overflow-hidden bg-secondary-lightest cart-image">
                  <img src={media.source} alt={name} className="w-100" />
                </div>
              )}
            </Column>
            <Column
              size="9"
              sizeXS="8"
              sizeS="8"
              sizeM="8"
              sizeL="9"
              sizeXL="9"
            >
              <div className="ml-4 p-4 d-flex h-100 flex-wrap justify-content-between">
                <Heading size="l">{name}</Heading>
                <div className="d-flex flex-column h-100 justify-content-between">
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
            </Column>
          </Row>
        </Card>
      </Column>
    );
  };

  const MobileView = () => {
    return (
      <Column size="4" sizeM="6" sizeS="12" sizeXS="12">
        <Card shadow="medium" className="m-7 overflow-hidden">
          {media.source && (
            <div
              className="d-flex align-items-center overflow-hidden bg-secondary-lightest"
              style={{ height: '280px' }}
            >
              <img src={media.source} alt={name} className="w-100" />
            </div>
          )}
          <div className="d-flex flex-column px-5 py-4">
            <div className="d-flex justify-content-between mt-4">
              <Heading size="l">{name}</Heading>
              <Heading size="m" appearance="subtle">
                {line_total.formatted_with_symbol}
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
          </div>
        </Card>
      </Column>
    );
  };

  if (innerWidth > 750) return <DesktopView />;
  else return <MobileView />;
};

export default CartItem;
