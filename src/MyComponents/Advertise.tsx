/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// import firstadd from '../images/firstadd.jpeg';

const Busdata = [
  {
    title: 'Buses on time',
    subtitle: 'Get 25% refund',
    description: 'If bus departure is delayed by 30 minutes from boarding point.',
  },
  {
    title: 'No bus cancellation',
    subtitle: 'Get 150% refund',
    description: 'Bus is cancelled without an alternate arrangement.',
  },
  {
    title: 'Alternate assurance',
    subtitle: 'Get 300% refund',
    description: 'Bus breaks down with no alternate arrangement within 6 hours.',
  },
];

const data = [
  {
    name: 'Buses',
    count: '10,000',
    description: 'Total buses currently being tracked',
  },
  {
    name: 'Routes',
    count: '60,000',
    description: 'Total routes covered by live tracking',
  },
  {
    name: 'Buses',
    count: '40,000',
    description: 'Total buses using track My bus feature',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100%',
      padding: '20px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (min-width: 768px) and (max-width: 1400px)': {
        justifyContent: 'space-between',
        padding: '20px 100px',
      },
      '@media (min-width: 1410px)': {
        padding: '30px 300px',
      },
    },
    card: {
      width: '100%',
      height: 'auto',
      margin: '10px 10px',
      '@media (min-width: 768px)': {
        height: 'auto',
      },
    },
    media: {
      width: '100%',
      '@media (min-width: 768px)': {
        maxWidth: '100%',
      },
    },
    cardimage: {
      width: '100px',
      height: '100px',
      padding: 10,
    },
    first: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        width: '100%',
        height: 100,
      },
    },
    innerdiv: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: 'auto',
      padding: 20,
    },
    label1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#922B21',
    },
    label2: {
      fontSize: '1.5rem',
      color: '#AAB7B8',
    },
    second: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        padding: '50px 50px',
      },
    },
    innerSecond: {
      padding: '10px 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    third: {
      width: '100%',
      height: 'auto',
      margin: '10px 10px',
      background: 'rgba(93, 109, 126, 0.1)',
      '@media (min-width: 768px)': {
        height: 'auto',
      },
    },
    second1: {},
    second2: {},
    top: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '10px 10px',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        padding: '50px 50px',
      },
    },
    topimg: {
      padding: '20px 20px',
    },
    topmodel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    topbtn: {
      width: '150px',
      background: 'transparent',
      border: '1px solid #2E4053',
      height: '45px',
      color: '#2E4053',
      textTransform: 'uppercase',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
    bottom: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        padding: '20px 20px',
      },
    },
    data: {
      padding: '10px 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textTransform: 'uppercase',
    },
  }),
);

const FirstAdd = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        object-fit="center"
        height="100%"
        width="100%"
        image="https://s3.rdbuz.com/Images/TVC-Banner.jpg"
        title="Advertise image"
      />
    </Card>
  );
};

const SecondAdd = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.first}>
        <div className={classes.cardimage}>
          <CardMedia
            title="trust label"
            image="https://s3.rdbuz.com/images/webplatform/india/HeroFeature/ic-shield-red-big.png"
            component="img"
          />
        </div>
        <div className={classes.innerdiv}>
          <Typography className={classes.label1}>Introducing On-Time Guarantee</Typography>
          <Typography className={classes.label2}>Leave on time, everytime</Typography>
        </div>
      </div>
      <hr />
      <div className={classes.second}>
        {Busdata.map((d, i) => (
          <div key={i} className={classes.innerSecond}>
            <p style={{ fontSize: '20px', textTransform: 'uppercase', color: '#2874A6' }}>{d.title}</p>
            <p style={{ fontSize: '15px', color: '#2E4053', fontWeight: 'bold' }}>{d.subtitle}</p>
            <p style={{ fontSize: '12px', color: '#979A9A' }}>{d.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

const ThirdAdd = () => {
  const classes = useStyles();
  return (
    <div className={classes.third}>
      <div className={classes.top}>
        <div className={classes.topimg}>
          <img style={{ maxWidth: '100%' }} src="https://s3.rdbuz.com/Images/carousel/tmb_img.png" alt="advertise" />
        </div>
        <div className={classes.topmodel}>
          <p style={{ margin: '10px 0', fontSize: '25px', textTransform: 'uppercase', color: '#2E4053' }}>
            Track My Bus - smarter way to Travel
          </p>
          <p style={{ margin: '30px auto', fontSize: '15px', color: '#979A9A' }}>
            Track your bus with our ‘Track My Bus’ feature and know the exact location in real-time.Stay informed and
            keep your family informed!
          </p>
          <button className={classes.topbtn}>Know more</button>
        </div>
      </div>
      <hr />
      <div className={classes.bottom}>
        {data.map((d, i) => (
          <div key={i} className={classes.data}>
            <p style={{ color: '#2E4053' }}>{d.name}</p>
            <h2 style={{ color: 'maroon' }}>{d.count}</h2>
            <p style={{ color: '#979A9A', fontSize: '12px' }}>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Advertise() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <FirstAdd />
      <SecondAdd />
      <ThirdAdd />
    </div>
  );
}
