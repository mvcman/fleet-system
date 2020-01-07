import React, { useState, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchRouteId } from '../APIS';

const mapStateToProps = (state: any) => {
  return {
    seatNumber: state.seatNumber,
    id: state.routeId,
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
      height: '100%',
      margin: '10px auto',
      '@media (min-width: 768px)': {
        margin: '0px 15px',
      },
    },
    card: {
      padding: '10px 20px',
      height: '100%',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    },
    span: {
      color: '#2E4053',
      fontWeight: 700,
      marginLeft: 10,
    },
  }),
);

interface ReduxProps {
  seatNumber: number;
  id: number;
}

function BookbusForm(props: ReduxProps) {
  const classes = useStyles();
  const [busDetail, setBusDetail] = useState<any>({});
  useEffect(() => {
    async function myBusData() {
      const r: any = await fetchRouteId(props.id);
      await setBusDetail(r);
      console.log('Your data is', r);
    }
    myBusData();
  }, [props.id]);
  return (
    <div className={classes.form}>
      <Card className={classes.card}>
        <h3>Bus Details</h3>
        <hr />
        <div className={classes.list}>
          <b style={{ color: '#979A9A' }}>
            Source:- <span className={classes.span}>{busDetail.source}</span>
          </b>
          <hr />
          <b style={{ color: '#979A9A' }}>
            Destination:- <span className={classes.span}>{busDetail.destination}</span>
          </b>
          <hr />
          <b style={{ color: '#979A9A' }}>
            ArrivalTime:- <span className={classes.span}>{busDetail.time}</span>
          </b>
          <hr />
          <b style={{ color: '#979A9A' }}>
            Fare:- <span className={classes.span}>INR {busDetail.fare}</span>
          </b>
          <hr />
          {props.seatNumber === 0 ? (
            <b style={{ color: 'red' }}>Select a seat</b>
          ) : (
            <span style={{ color: 'green' }}>
              <b>Selected seat:-</b> {props.seatNumber}
            </span>
          )}
        </div>
      </Card>
    </div>
  );
}

export default connect(mapStateToProps)(BookbusForm);
