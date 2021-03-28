import React, { useState } from 'react';
import {
  Button,
  Heading,
  Card,
  Stepper,
  Text,
  Badge,
  Label,
  Textarea,
} from '@innovaccer/design-system';

const Center = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={`d-flex justify-content-center ${rest.className}`}>
      {children}
    </div>
  );
};

const Checkout = () => {
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(active - 1);

  const steps = [
    {
      label: 'Shipping address',
      value: 'shipping_address',
    },
    {
      label: 'Payment details',
      value: 'payment_details',
    },
  ];

  const totalSteps = steps.length;

  const onChange = (index) => {
    setActive(index);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };

  return (
    <div className="mt-10 px-8 py-6 mb-5 d-flex justify-content-center">
      <Card className="w-50 px-8 py-6">
        <Center>
          <Heading appearance="default" size="xxl">
            Checkout
          </Heading>
        </Center>
        <Center className="my-5">
          <Stepper
            steps={steps}
            active={active}
            completed={completed}
            onChange={onChange}
          />
        </Center>
      </Card>
    </div>
  );
};

export default Checkout;
