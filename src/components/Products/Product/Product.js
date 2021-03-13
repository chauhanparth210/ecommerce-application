import React from 'react';
import { Text, Heading, Column, Card, Icon } from '@innovaccer/design-system';

const Product = ({ product }) => {
  const { name, description, price, image } = product;
  return (
    <Column size="3" sizeXS="auto" className="my-6 mx-8">
      <Card shadow="light" className="w-100 h-100 d-flex flex-column px-5 py-4">
        {image && (
          <img
            src={image}
            alt="image_of_product"
            height="260"
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
          size={30}
          name="shopping_cart"
          className="align-self-end mt-5"
          appearance="subtle"
        />
      </Card>
    </Column>
  );
};

export default Product;
