import React, { useState, useEffect } from 'react';
import {
  Heading,
  Card,
  Stepper,
  Button,
  Column,
} from '@innovaccer/design-system';
import AddressFrom from '../AddressFrom';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';
import { useHistory } from 'react-router-dom';

const Center = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={`d-flex justify-content-center ${rest.className}`}>
      {children}
    </div>
  );
};

const Checkout = ({ cart }) => {
  const [active, setActive] = useState(1);
  const [completed, setCompleted] = useState(active - 1);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();

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

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: 'cart',
          });

          setCheckoutToken(token);
        } catch {
          if (active !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
    // eslint-disable-next-line
  }, [cart]);

  const totalSteps = steps.length;

  const getherShippingInfo = (data) => {
    setShippingData(data);
    onClickNext();
  };

  const onChange = (index) => {
    setActive(index);
  };

  const onClickNext = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    setActive(updatedActive);
    setCompleted(active > completed ? active : completed);
  };

  const Confirmation = () => {
    return <Heading>Thank you !!</Heading>;
  };

  const RenderButton = () => {
    if (active + 1 === totalSteps) {
      return (
        <div className="d-flex justify-content-between mt-6">
          <Button onClick={() => setActive((preAcitve) => preAcitve - 1)}>
            Back
          </Button>
          <Button appearance="success" onClick={onClickNext} type="submit">
            Pay {checkoutToken?.live.subtotal.formatted_with_symbol}
          </Button>
        </div>
      );
    }
    return <></>;
  };

  const Form = () =>
    active === 0 ? (
      <AddressFrom
        onClickNext={onClickNext}
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        getherShippingInfo={getherShippingInfo}
      />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} />
    );

  return (
    <div className="mt-10 px-8 py-6 mb-5 d-flex justify-content-center">
      <Column size="6" sizeXS="12" sizeS="12" sizeM="8" sizeL="8" sizeXL="6">
        <Card className="px-8 py-6">
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
          {active === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
          <RenderButton />
        </Card>
      </Column>
    </div>
  );
};

export default Checkout;
