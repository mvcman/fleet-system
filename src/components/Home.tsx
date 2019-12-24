import React from 'react';
import Banner from '../MyComponents/Banner';
import Hero from '../MyComponents/Hero';
import Offer from '../MyComponents/Offer';
import Advertise from '../MyComponents/Advertise';
import Features from '../MyComponents/Features';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      display: 'inline-block',
      textDecoration: 'none',
      letterSpacing: 3,
      color: theme.palette.common.black,
      background: theme.palette.primary.light,
      padding: '0.4rem 0.9rem',
      border: `3px solid ${theme.palette.primary.light}`,
      transition: 'all 0.3s linear',
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:hover': {
        background: 'transparent',
        color: theme.palette.primary.light,
        border: `3px solid ${theme.palette.primary.light}`,
      },
    },
  }),
);

function Home() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Hero hero="hero">
          <Banner title="Luxurios Buses" subtitle="Comfortable seats and AC buses just at $29">
            <Link to="/booking">
              <button type="button" className={classes.btn}>
                Book Bus
              </button>
            </Link>
          </Banner>
        </Hero>
      </div>
      <Offer />
      <Advertise />
      <Features />
    </>
  );
}

export default Home;
