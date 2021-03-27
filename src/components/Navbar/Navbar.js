import React from 'react';
import { Heading, Icon, Pills } from '@innovaccer/design-system';

const Navbar = ({ totalItems }) => {
  return (
    <div className="px-7 py-4 sticky-navbar bg-light d-flex align-items-center justify-content-between shadow">
      <div>
        <Heading size="l">E-Commerce</Heading>
      </div>
      <div className="position-relative pt-4 d-flex">
        <Pills appearance="alert" className="item-number">
          {totalItems > 0 ? totalItems : 0}
        </Pills>
        <Icon size={35} name="shopping_cart" appearance="subtle" />
      </div>
    </div>
  );
};

export default Navbar;
