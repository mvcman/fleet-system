import React, { useState, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, Link } from '@material-ui/core';
import BusDetail from '../MyComponents/BusDetail';
import MyBus from '../MyComponents/Mybus';
import BookbusForm from '../MyComponents/BookbusForm';
import { connect } from 'react-redux';
import { fetchRouteId } from '../APIS';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100%',
      height: 'auto',
      padding: '20px 20px',
      fontFamily: theme.typography.fontFamily,
      '@media (min-width: 768px) and (max-width: 1400px)': {
        padding: '20px 100px',
        height: '100vh',
      },
      '@media (min-width: 1410px)': {
        padding: '20px 300px',
        height: '100vh',
      },
    },
    body: {
      border: '1px solid gray',
    },
    seats: {
      height: 'auto',
      padding: '20px 20px',
      background: 'rgba(93, 109, 126, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      '@media (min-width: 768px)': {
        height: 'auto',
        flexDirection: 'row',
      },
    },
  }),
);
interface ReduxProps {
  id: number;
}

async function getRouteId(id: number) {
  const data = await fetchRouteId(id);
  console.log('Inside getRouteId', data);
  return data;
}

const Bookbus = (props: ReduxProps) => {
  const classes = useStyles();
  const [busDetail, setBusDetail] = useState<any>({});
  useEffect(() => {
    async function myBusData() {
      const r: any = await getRouteId(props.id);
      await setBusDetail(r);
      console.log('Your data is', r);
    }
    myBusData();
  }, [props.id]);
  return (
    <div className={classes.main}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/booking">
          Back
        </Link>
      </Breadcrumbs>
      <div className={classes.body}>
        <BusDetail
          name={busDetail.name}
          departureTime={busDetail.time}
          departurePlace={busDetail.source}
          arrivalTime={busDetail.time}
          duration={busDetail.duration}
          rating={busDetail.rating}
          fare={busDetail.fare}
        />
        <div className={classes.seats}>
          <MyBus />
          <BookbusForm />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    id: state.routeId,
  };
};

export default connect(mapStateToProps)(Bookbus);
