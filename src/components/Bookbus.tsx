import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import BusDetail from '../MyComponents/BusDetail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100%',
      height: 'auto',
      padding: '20px 20px',
      fontFamily: theme.typography.fontFamily,
      '@media (min-width: 768px) and (max-width: 1400px)': {
        padding: '20px 100px',
      },
      '@media (min-width: 1410px)': {
        padding: '20px 300px',
      },
    },
    body: {
      border: '1px solid gray',
    },
    desc: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 20px',
      justifyContent: 'space-between',
      width: '100%',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
    seats: {
      height: '500px',
      background: 'gray',
    },
  }),
);

const Bookbus = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <BusDetail
          name="Mamata Travels1"
          departureTime="12:00 PM"
          departurePlace="Than1e"
          arrivalTime="06:00 AM"
          duration="07h 00m"
          rating={4.5}
          fare={450}
        />
        <div className={classes.seats}></div>
      </div>
    </div>
  );
};

export default Bookbus;
