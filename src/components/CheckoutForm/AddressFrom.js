import React, { useState, useEffect } from 'react';
import {
  Heading,
  Input,
  Textarea,
  Caption,
  Label,
  Button,
  Row,
  Column,
  Dropdown,
} from '@innovaccer/design-system';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';

const AddressFrom = ({
  checkoutToken,
  onClickNext,
  shippingData,
  getherShippingInfo,
}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // eslint-disable-next-line
  const [shippingSubdivision, setShippingSubdivision] = useState('');

  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingSubdivisions, setLoadingSubdivisions] = useState(true);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
    setLoadingCountries(false);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
    setLoadingSubdivisions(false);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  let shippingCountriesOptions = Object.entries(shippingCountries).map(
    ([code, name]) => ({
      value: name,
      label: name,
    })
  );

  let shippingSubdivisionsOptions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      value: name,
      label: name,
    })
  );

  const { handleSubmit, handleChange, data, errors } = useForm({
    initialValues: {
      name: shippingData.name || '',
      address: shippingData.address || '',
      email: shippingData.email || '',
      city: shippingData.city || '',
      shipping_country: shippingData.shipping_country || '',
      shipping_subdivision: shippingData.shipping_subdivision || '',
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
      shipping_country: {
        required: {
          message: 'Country is required',
        },
      },
      shipping_subdivision: {
        required: {
          message: 'Subdivision is required',
        },
      },
    },
    onSubmit: () => {
      getherShippingInfo(data);
    },
  });

  if (loadingCountries || loadingSubdivisions) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Heading appearance="subtle" size="xl">
          Loading...
        </Heading>
      </div>
    );
  }

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
            className="px-3 my-4"
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
            className="px-3 my-4"
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

        <Row className="px-3 my-4">
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

        <Row>
          <Column
            size="6"
            sizeXS="12"
            sizeS="12"
            sizeM="12"
            className="px-3 my-4"
          >
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
          <Column
            size="6"
            sizeXS="12"
            sizeS="12"
            sizeM="12"
            className="px-3 my-4"
          >
            <Label withInput={true} required>
              Shipping Country
            </Label>
            <Dropdown
              value={data.shipping_country || ''}
              onChange={handleChange('shipping_country')}
              placeholder={data.shipping_country || 'Shipping country'}
              error={errors.shipping_country}
              options={shippingCountriesOptions}
              loading={loadingCountries}
            />
            {errors.shipping_country && (
              <Caption error={true} withInput={true}>
                {errors.shipping_country}
              </Caption>
            )}
          </Column>
        </Row>

        <Row>
          <Column
            size="6"
            sizeXS="12"
            sizeS="12"
            sizeM="12"
            className="px-3 my-4"
          >
            <Label withInput={true} required>
              Shipping Subdivision
            </Label>
            <Dropdown
              value={data.shipping_subdivision || ''}
              onChange={handleChange('shipping_subdivision')}
              placeholder={data.shipping_subdivision || 'Shipping subdivision'}
              error={errors.shipping_subdivision}
              options={shippingSubdivisionsOptions}
              loading={loadingSubdivisions}
              withSearch={true}
            />
            {errors.shipping_subdivision && (
              <Caption error={true} withInput={true}>
                {errors.shipping_subdivision}
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
