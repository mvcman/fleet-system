import React from 'react';
import Searchbar from '../MyComponents/Searchbar';
import TableComponent from '../MyComponents/TableComponent';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
    },
    bookingDiv: {
      width: '100%',
      height: 'auto',
      textAlign: 'center',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
    },
    h2: {
      fontSize: '20px',
      '@media (min-width: 768px)': {
        fontSize: '30px',
      },
    },
  }),
);

function Booking() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Searchbar />
      <div className={classes.bookingDiv}>
        <h2 style={{ margin: 10 }} className={classes.h2}>
          Following are the routes we are currently running on:
        </h2>
      </div>
      <TableComponent />
    </div>
  );
}

export default Booking;
