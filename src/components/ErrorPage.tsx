import React from 'react';
import Hero from '../MyComponents/Hero';
import Banner from '../MyComponents/Banner';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <Hero hero="error">
      <Banner title="404 Error Page!" subtitle="Sorry Page not found!">
        <Link to="/">
          <button type="button" className="btn-primary">
            Go to Home Page!
          </button>
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
