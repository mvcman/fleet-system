import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  return {
    seatNumber: state.seatNumber,
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

interface ReduxProps {
  seatNumber: number;
}

function BookbusForm(props: ReduxProps) {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Card>
        <CardHeader>Bus Details</CardHeader>
        <CardContent>
          <p>
            <b>Source:- </b>
          </p>
          <p>
            <b>Destination:- </b>
          </p>
          <p>
            <b>ArrivalTime:- </b>
          </p>
          {props.seatNumber === 0 ? (
            <p>
              <b style={{ color: 'red' }}>Select a seat</b>
            </p>
          ) : (
            <p style={{ color: 'green' }}>
              <b>Selected seat:-</b> {props.seatNumber}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default connect(mapStateToProps)(BookbusForm);
