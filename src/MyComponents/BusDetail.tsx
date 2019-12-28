import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Badge } from 'reactstrap';

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
  let badgename = 'primary';
  if (props.rating >= 4.0) {
    badgename = 'success';
  } else if (props.rating >= 3.0) {
    badgename = 'warning';
  } else if (props.rating >= 2.0) {
    badgename = 'primary';
  } else {
    badgename = 'danger';
  }

  return (
    <div className={classes.Busdetail}>
      <div>
        <h6>
          <span style={{ color: '#979A9A' }}>Name</span>
        </h6>
        <h6>
          <span style={{ color: '#2E4053', fontWeight: 'bold' }}>{props.name}</span>
        </h6>
      </div>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h6>
          <span style={{ color: '#979A9A' }}>Departure</span>
        </h6>
        <h6>
          <span style={{ color: '#2E4053', fontWeight: 'bold' }}>{props.departureTime}</span>
        </h6>
        <h6>
          <span style={{ color: '#2E4053', fontWeight: 'bold' }}>{props.departurePlace}</span>
        </h6>
      </div>
      <hr />
      <div>
        <h6>
          <span style={{ color: '#979A9A' }}>Duration</span>
        </h6>
        <h6>
          <span style={{ color: '#2E4053', fontWeight: 'bold' }}>{props.duration}</span>
        </h6>
      </div>
      <hr />
      <div>
        <h6>
          <span style={{ color: '#979A9A' }}>Arrival</span>
        </h6>
        <h6>
          <span style={{ color: '#2E4053', fontWeight: 'bold' }}>{props.arrivalTime}</span>
        </h6>
      </div>
      <hr />
      <div>
        <h6>
          <span style={{ color: '#979A9A' }}>Rating</span>
        </h6>
        <h6>
          <Badge color={badgename}>{props.rating}</Badge>
        </h6>
      </div>
      <hr />
      <div>
        <h6>
          <span style={{ color: '#979A9A' }}>Fare</span>
        </h6>
        <h6>
          <span style={{ color: '#2E4053', fontWeight: 'bold' }}>INR {props.fare}</span>
        </h6>
      </div>
    </div>
  );
}

export default BusDetail;
