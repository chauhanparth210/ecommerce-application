import React from 'react';
import { Heading, Icon, Pills } from '@innovaccer/design-system';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <div className="px-8 py-4 sticky-navbar bg-light d-flex align-items-center justify-content-between shadow">
      <div>
        <Link to="/" className="remove-text-decoration">
          <Heading size="l">E-Commerce</Heading>
        </Link>
      </div>
      {location.pathname === '/' && (
        <div className="position-relative pt-4 d-flex">
          <Pills appearance="alert" className="item-number">
            {totalItems > 0 ? totalItems : 0}
          </Pills>
          <Link to="/cart">
            <Icon size={35} name="shopping_cart" appearance="subtle" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
