import React from 'react';
import { Heading, Text } from '@innovaccer/design-system';

const PaymentForm = ({ checkoutToken }) => {
  return (
    <div>
      <Heading appearance="default" size="m" className="mb-5">
        Order Summary
      </Heading>
      <div className="m-2" style={{ borderBottom: 'var(--border)' }}>
        {checkoutToken.live.line_items.map((product) => (
          <div key={product.name} className="d-flex justify-content-between">
            <div className="d-flex flex-column my-3">
              <Text size="large">{product.name}</Text>
              <Text appearance="subtle">{`Quantity: ${product.quantity}`}</Text>
            </div>
            <Text size="large" weight="medium">
              {product.line_total.formatted_with_symbol}
            </Text>
          </div>
        ))}
        <div className="d-flex justify-content-between my-4">
          <Text size="large" weight="strong">
            Total
          </Text>
          <Text size="large" weight="strong">
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Text>
        </div>
      </div>
      {/* <Heading appearance="default" size="m" className="my-4">
        Payment details
      </Heading> */}
    </div>
  );
};

export default PaymentForm;
