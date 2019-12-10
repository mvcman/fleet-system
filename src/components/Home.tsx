import React from 'react';
import Banner from '../MyComponents/Banner';
import Hero from '../MyComponents/Hero';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <Hero hero="hero">
      <Banner title="Luxurios Buses" subtitle="Comfortable seats and AC bus just at $29">
        <Link to="/booking">
          <button type="button" className="btn-primary">
            Book Bus
          </button>
        </Link>
      </Banner>
    </Hero>
  );
}

export default Home;
