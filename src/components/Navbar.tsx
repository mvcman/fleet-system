import React, { useState } from 'react';
import logo from '../images/bus.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UnorderList from '../MyComponents/UnorderList';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface State {
  isOpen: boolean;
}

const navigationlist = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/contact',
    name: 'Contact Us',
  },
  {
    route: '/booking',
    name: 'Booking',
  },
  {
    route: '/login',
    name: 'Login',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar1: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '0.75rem 2rem',
      background: '#f7f7f7',
      zIndex: 1,
      fontFamily: theme.typography.fontFamily,
    },
    navCenter1: {
      '@media (min-width: 768px)': {
        maxWidth: 1170,
        margin: '0 auto',
        paddingTop: 10,
        display: 'flex',
      },
    },
    navheader1: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    navheaderh2: {
      color: theme.palette.primary.dark,
      fontWeight: 700,
      paddingLeft: 10,
    },
    span: {
      color: theme.palette.secondary.dark,
      fontWeight: 700,
    },
    navbtn1: {
      background: 'transparent',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      '&:hover': {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
      },
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    navicon1: {
      fontSize: '1.5rem',
      color: theme.palette.primary.dark,
      outline: 'none',
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
    },
    navlinks1: {
      height: 0,
      overflow: 'hidden',
      transition: 'all 0.3s linear',
      textDecoration: 'none',
      listStyle: 'none',
      '@media (min-width: 768px)': {
        height: 'auto',
        display: 'flex',
        marginLeft: '10rem',
      },
    },
    navlinks1a: {
      display: 'block',
      padding: '1rem 0',
      color: theme.palette.primary.dark,
      transition: 'all 0.3s linear',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: 3,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.main,
        listStyleType: 'none',
        textDecoration: 'none',
      },
      '@media (min-width: 768px)': {
        margin: '0 1rem',
        padding: '0.5rem 0',
      },
    },
    shownav1: {
      height: 200,
      '@media (min-width: 768px)': {
        height: 'auto',
      },
    },
  }),
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.navbar1}>
      <div className={classes.navCenter1}>
        <div className={classes.navheader1}>
          <Link to="/">
            <img width={40} height={40} src={logo} alt="mylogo1" />
          </Link>
          <h2 className={classes.navheaderh2}>
            We<span className={classes.span}>Travels</span>
          </h2>
          <button type="button" className={classes.navbtn1} onClick={handleToggle}>
            <FaAlignRight className={classes.navicon1} />
          </button>
        </div>
        <UnorderList
          prev_opt={`${classes.navlinks1} ${classes.shownav1}`}
          next_opt={classes.navlinks1}
          navlinksa={classes.navlinks1a}
          handleToggle={handleToggle}
          list={navigationlist}
          isOpen={isOpen}
        />
      </div>
    </nav>
  );
}
