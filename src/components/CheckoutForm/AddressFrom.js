import React from 'react';
import {
  Heading,
  Input,
  Textarea,
  Caption,
  Label,
  Button,
  Row,
  Column,
} from '@innovaccer/design-system';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

/**
 * FIELDS:
 * name = string
 * address = string
 * email =  string
 * city = string
 * shipping_country = INDIA
 * shipping_subdivision = string
 */

const AddressFrom = (props) => {
  const { onClickNext } = props;

  const { handleSubmit, handleChange, data, errors } = useForm({
    initialValues: {
      shipping_country: 'INDIA',
    },
    validations: {
      name: {
        required: {
          message: 'Name is required',
        },
      },
      address: {
        required: {
          message: 'Address is required',
        },
      },
      email: {
        pattern: {
          value: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$',
          message: 'Enter valid email',
        },
        required: {
          message: 'Email is required',
        },
      },
      city: {
        required: {
          message: 'City is required',
        },
      },
      // shipping_subdivision: {
      //   required: {
      //     value: true,
      //     message: 'Subdivision is required',
      //   },
      // },
    },
    onSubmit: () => {
      console.log(data);
      onClickNext();
    },
  });

  console.log(errors);

  return (
    <div>
      <Heading appearance="default" size="m">
        Shipping address
      </Heading>
      <form onSubmit={handleSubmit}>
        <Row className="my-4">
          <Column
            size="6"
            sizeXS="12"
            sizeS="12"
            sizeM="12"
            className="px-4 my-4"
          >
            <Label withInput={true} required>
              Name
            </Label>
            <Input
              maxLength={20}
              minLength={1}
              value={data.name || ''}
              onChange={handleChange('name')}
              placeholder="Name"
              type="input"
              error={errors.name}
            />
            {errors.name && (
              <Caption error={true} withInput={true}>
                {errors.name}
              </Caption>
            )}
          </Column>
          <Column
            size="6"
            sizeXS="12"
            sizeS="12"
            sizeM="12"
            className="px-4 my-4"
          >
            <Label withInput={true} required>
              Email
            </Label>
            <Input
              maxLength={50}
              minLength={1}
              value={data.email || ''}
              onChange={handleChange('email')}
              placeholder="Email"
              type="input"
              error={errors.email}
            />
            {errors.email && (
              <Caption error={true} withInput={true}>
                {errors.email}
              </Caption>
            )}
          </Column>
        </Row>

        <Row className="m-4">
          <Column>
            <Label withInput={true} required>
              Address
            </Label>
            <Textarea
              value={data.address || ''}
              onChange={handleChange('address')}
              placeholder="Address"
              error={errors.address}
              rows="2"
              resize={false}
            />
            {errors.address && (
              <Caption error={true} withInput={true}>
                {errors.address}
              </Caption>
            )}
          </Column>
        </Row>

        <Row className="m-4">
          <Column>
            <Label withInput={true} required>
              City
            </Label>
            <Input
              maxLength={20}
              minLength={1}
              value={data.city || ''}
              onChange={handleChange('city')}
              placeholder="City"
              type="input"
              error={errors.city}
            />
            {errors.city && (
              <Caption error={true} withInput={true}>
                {errors.city}
              </Caption>
            )}
          </Column>
        </Row>

        <div className="d-flex justify-content-between mt-6">
          <Link to="/cart" className="remove-text-decoration">
            <Button> Back to cart </Button>
          </Link>
          <Button
            appearance="primary"
            type="submit"
            // onClick={onClickNext}
            icon="navigate_next"
            iconAlign="right"
            disabled={Object.keys(errors).length}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressFrom;
