import React from 'react';
import { Text, Heading, Card, Icon, Column } from '@innovaccer/design-system';
import parse from 'html-react-parser';

const Product = ({ product, onAddToCart }) => {
  const { id, name, media, price, description } = product;

  return (
    <Column size="4" sizeM="6" sizeS="12" sizeXS="12">
      <Card shadow="medium" className="m-7 overflow-hidden">
        {media.source && (
          <img src={media.source} alt={name} height="280" className="w-100" />
        )}
        <div className="d-flex flex-column px-5 py-4">
          <div className="d-flex justify-content-between mt-4">
            <Heading size="l">{name}</Heading>
            <Heading size="m" appearance="subtle">
              {price.formatted_with_symbol}
            </Heading>
          </div>
          <Text size="large" appearance="subtle" className="ellipsis--noWrap">
            {parse(description)}
          </Text>
          <Icon
            size={28}
            name="add_shopping_cart"
            className="align-self-end mt-5 cursor-pointer"
            appearance="subtle"
            onClick={() => onAddToCart(id, 1)}
          />
        </div>
      </Card>
    </Column>
  );
};

export default Product;
