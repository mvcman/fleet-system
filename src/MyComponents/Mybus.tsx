import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Stearing from '../images/stearing.png';
import Seat from '../images/seat.png';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bus: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      width: 'auto',
      margin: 'auto',
      backgroundColor: 'white',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
    line: {
      height: '100%',
      width: '10px',
      background: 'gray',
    },
    driver: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '100%',
      width: 'auto',
      padding: '20px 20px',
      '@media (min-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
    },
    img: {
      width: 30,
      height: 30,
      transform: 'rotate(90deg)',
      '@media (min-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transform: 'rotate(0deg)',
      },
    },
    stear: {
      width: 30,
      height: 30,
      transform: 'rotate(180deg)',
      '@media (min-width: 768px)': {
        transform: 'rotate(90deg)',
      },
    },
    PassengerSeats: {
      display: 'flex',
      flexDirection: 'row-reverse',
      height: '100%',
      width: 'auto',
      padding: '10px 10px',
      '@media (min-width: 768px)': {
        flexDirection: 'column',
      },
    },
    row: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
    mrow: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
    btn: {
      margin: 8,
      '@media (min-width: 768px)': {
        margin: 5,
      },
    },
    form: {
      width: '100%',
      height: 'auto',
      margin: '10px auto',
      '@media (min-width: 768px)': {
        margin: '0px 15px',
      },
    },
  }),
);

interface Props {
  seat: number;
}

interface ReduxProps {
  dispatch: any;
}

function MyBus(myprops: ReduxProps) {
  const classes = useStyles();

  const DisplaySeats = (props: Props) => {
    return (
      <button className={classes.btn} onClick={() => myprops.dispatch({ type: 'SEAT', payload: props.seat })}>
        <img src={Seat} className={classes.img} alt="bus-seat" />
        {props.seat}
      </button>
    );
  };

  return (
    <div className={classes.bus}>
      <div className={classes.line}></div>
      <div className={classes.driver}>
        <img src={Stearing} className={classes.stear} alt="stearing" />
      </div>
      <hr />
      <div className={classes.PassengerSeats}>
        <div className={classes.row}>
          {[4, 5, 12, 13, 20, 21, 28, 29, 36, 37, 45].map(d => (
            <DisplaySeats key={d} seat={d} />
          ))}
        </div>
        <div className={classes.row}>
          {[3, 6, 11, 14, 19, 22, 27, 30, 35, 38, 44].map(d => (
            <DisplaySeats key={d} seat={d} />
          ))}
        </div>
        <div className={classes.mrow}>
          {[43].map(d => (
            <DisplaySeats key={d} seat={d} />
          ))}
        </div>
        <div className={classes.row}>
          {[2, 7, 10, 15, 18, 23, 26, 31, 34, 39, 42].map(d => (
            <DisplaySeats key={d} seat={d} />
          ))}
        </div>
        <div className={classes.row}>
          {[1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41].map(d => (
            <DisplaySeats key={d} seat={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default connect()(MyBus);
