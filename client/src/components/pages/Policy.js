import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Policy = () => {
  return (
    <Fragment>
      <Navbar background={true} extendedBackground={true} />
      <div className='content-wrapper'>Our Privacy Policy</div>
      <Footer />
    </Fragment>
  );
};

export default Policy;
