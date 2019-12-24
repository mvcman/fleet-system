import React, { useState } from 'react';
// import './Searchbarcss.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// import Button from '@bit/udgama.udgama-react.button'
// import { Button } from '@bit/udgama.udgama-react.button';
// import Button from '../MyComponents/Button/Button';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchbar: {
      width: '100%',
      height: 'auto',
      padding: 10,
      margin: 10,
      fontFamily: theme.typography.fontFamily,
    },
    label: {
      width: '100%',
      color: theme.palette.primary.main,
      fontSize: '15px',
      textAlign: 'left',
      marginBottom: '5px',
      '@media (min-width: 768px)': {
        textAlign: 'right',
        fontSize: 20,
        maxWidth: '35%',
      },
    },
    inputbox: {
      width: '100%',
      height: '40px',
      marginBottom: '20px',
      '@media (min-width: 768px)': {
        width: '100%',
        height: 40,
      },
    },
    input: {
      width: '90%',
      height: '100%',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.dark,
      border: `2px solid ${theme.palette.primary.light}`,
      borderRadius: 5,
      outline: 'none',
      padding: 10,
    },
    btn1: {
      display: 'inline-block',
      textDecoration: 'none',
      letterSpacing: 3,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
      padding: '0.4rem 0.9rem',
      border: `3px solid ${theme.palette.primary.main}`,
      transition: 'all 0.3s linear',
      textTransform: 'uppercase',
      cursor: 'pointer',
      outline: 'none',
      '&:hover': {
        background: 'transparent',
        color: theme.palette.primary.light,
        border: `3px solid ${theme.palette.primary.main}`,
        cursor: 'pointer',
        outline: 'none',
      },
    },
  }),
);

export default function Searchbar() {
  const [input, setInput] = useState('');
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setInput('');
  };

  return (
    <div className={`${classes.searchbar} row`}>
      <div className={`${classes.label} col-md-4 col-12`}>
        <h4> Search Route from list:- </h4>
      </div>
      <div className={`${classes.inputbox} col-md-4 col-12`}>
        <input
          type="text"
          className={classes.input}
          value={input}
          placeholder="Type your location here"
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div className="button1 col-md-4 col-12">
        <button className={`${classes.btn1} btn`} onClick={handleClick}>
          <Search /> Search
        </button>
        {/* <Button className="btn searchbutton" label="Search" icon={<Search />} onClick={this.handleClick} /> */}
      </div>
    </div>
  );
}
