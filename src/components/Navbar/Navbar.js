import React from 'react';
import { Heading, Icon } from '@innovaccer/design-system';

const Navbar = () => {
  return (
    <div className="px-10 py-4 sticky-navbar bg-light d-flex align-items-center justify-content-between shadow">
      <div>
        <Heading size="l">E-Commerce</Heading>
      </div>
      <div>
        <Icon size={32} name="shopping_cart" appearance="subtle" />
      </div>
    </div>
  );
};

export default Navbar;
