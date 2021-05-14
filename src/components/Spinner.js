import React from 'react';
import { Spinner as NewSpinner } from '@innovaccer/design-system';

const Spinner = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <NewSpinner appearance="primary" size="medium" />
    </div>
  );
};

export default Spinner;
