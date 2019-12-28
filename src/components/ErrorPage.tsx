import React from 'react';
import Hero from '../MyComponents/Hero';
import Banner from '../MyComponents/Banner';
import { Link } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

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

function Error() {
  const classes = useStyles();
  return (
    <Hero hero="error">
      <Banner title="404 Error Page!" subtitle="Sorry Page not found!">
        <Link to="/">
          <button type="button" className={classes.btn}>
            Go to Home Page!
          </button>
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
