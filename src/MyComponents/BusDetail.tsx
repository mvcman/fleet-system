import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Busdetail: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 20px',
      justifyContent: 'space-between',
      width: '100%',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
  }),
);

interface Props {
  name: string;
  departureTime: string;
  departurePlace: string;
  duration: string;
  arrivalTime: string;
  rating: number;
  fare: number;
}

function BusDetail(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.Busdetail}>
      <div>
        <h6>Name</h6>
        <h6>{props.name}</h6>
      </div>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h6>Departure</h6>
        <h6>{props.departureTime}</h6>
        <h6>{props.departurePlace}</h6>
      </div>
      <hr />
      <div>
        <h6>Duration</h6>
        <h6>{props.duration}</h6>
      </div>
      <hr />
      <div>
        <h6>Arrival</h6>
        <h6>
          <span style={{ color: '#000', fontWeight: 'bold' }}>{props.arrivalTime}</span>
        </h6>
      </div>
      <hr />
      <div>
        <h6>Rating</h6>
        <h6>
          <span style={{ color: '#000', fontWeight: 'bold' }}>{props.rating}</span>
        </h6>
      </div>
      <hr />
      <div>
        <h6>Fare</h6>
        <h6>
          INR <span style={{ color: '#000', fontWeight: 'bold' }}>{props.fare}</span>
        </h6>
      </div>
    </div>
  );
}

export default BusDetail;
