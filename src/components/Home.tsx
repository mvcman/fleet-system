import React from 'react';
import Banner from '../MyComponents/Banner';
import Hero from '../MyComponents/Hero';
import Card from '../MyComponents/Card/Card';
import {busFeatures} from './constants';

import { Link } from 'react-router-dom';

interface Props {
  features: any[]
}

function MyFeatures(props: Props) {
  const AllCards: any = props.features.map((f: any, i: number) => 
    <Card key={i} title={f.title} description={f.description} logo={f.logo}/>  
  );
  return AllCards;
}

function Home() {
  return (
    <>
      <Hero hero="hero">
        <Banner title="Luxurios Buses" subtitle="Comfortable seats and AC bus just at $29">
          <Link to="/booking">
            <button type="button" className="btn-primary">
              Book Bus
            </button>
          </Link>
        </Banner>
      </Hero>
      <div className="features1">
        <div className="row card1">
          <MyFeatures features={busFeatures} /> 
        </div>
      </div>
    </>
  );
}

export default Home;
