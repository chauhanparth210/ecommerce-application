import React, { useState } from 'react';
import { Heading, Card, Stepper, Button } from '@innovaccer/design-system';
import AddressFrom from '../AddressFrom';
import PaymentForm from '../PaymentForm';
import { Link } from 'react-router-dom';

const Center = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={`d-flex justify-content-center ${rest.className}`}>
      {children}
    </div>
  );
};

const Checkout = () => {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(active - 1);

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

  const onClickNext = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    setActive(updatedActive);
    setCompleted(active > completed ? active : completed);
  };

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  const RenderButton = () => {
    if (active + 1 === totalSteps) {
      return (
        <Button appearance="success" type="submit">
          Save
        </Button>
      );
    }

    return (
      <div className="d-flex justify-content-between">
        <Link to="/cart" className="remove-text-decoration">
          <Button>Back to cart</Button>
        </Link>
        <Button
          appearance="primary"
          type="button"
          onClick={onClickNext}
          icon="navigate_next"
          iconAlign="right"
        >
          Next
        </Button>
      </div>
    );
  };

  const Form = () => (active === 0 ? <AddressFrom /> : <PaymentForm />);

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
        {active === steps.length ? <Confirmation /> : <Form />}
        <RenderButton />
      </Card>
    </div>
  );
};

export default Checkout;
