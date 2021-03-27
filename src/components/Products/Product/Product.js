import React from 'react';
import { Text, Heading, Card, Icon } from '@innovaccer/design-system';

const Product = ({ product }) => {
  const { name, description, price, image } = product;
  return (
    <div className="flex-basis">
      <Card shadow="light" className="d-flex flex-column px-5 py-4">
        {image && (
          <img
            src={image}
            alt="image_of_product"
            height="300"
            className="w-100"
          />
        )}
        <div className="d-flex justify-content-between mt-4">
          <Heading size="l">{name}</Heading>
          <Heading size="l" appearance="subtle">
            {price}
          </Heading>
        </div>
        <Text size="large" appearance="subtle" className="ellipsis--noWrap">
          {description}
        </Text>
        <Icon
          size={28}
          name="add_shopping_cart"
          className="align-self-end mt-5"
          appearance="subtle"
        />
      </Card>
    </div>
  );
};

export default Product;
