import React from 'react';
// import CardImage1 from '../images/cardimage1.png';
// import CardImage2 from '../images/cardimage2.png';
// import CardImage3 from '../images/cardimage3.png';
import { Typography, CardContent, Card } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const CardDetails = [
  {
    header: 'Get assured cashback between Rs.100 to Rs.500',
    image: 'https://s1.rdbuz.com/Images/ola/new/274x147.png',
    footer: {
      top: 'Limited period offer',
      bottom: 'Pay Using OlaMoney Postpaid',
    },
  },
  {
    header: 'Cashback Up to Rs 125 on Bus tickets',
    image: 'https://st.redbus.in/Images/INDOFFER/FESTIVE/New1/274x147.png',
    footer: {
      top: 'Limited period offer',
      bottom: 'Use code: CONTROL',
    },
  },
  {
    header: 'Win Rs 10 to Rs 300 on minimum purchase of Rs 300.',
    image: 'https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png',
    footer: {
      top: 'Pay Using Amazon Pay',
      bottom: 'Limited period offer',
    },
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mycards: {
      width: '100%',
      padding: '20px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#EAECEE',
      '@media (min-width: 768px) and (max-width: 1400px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px 100px',
      },
      '@media (min-width: 1410px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px 300px',
      },
    },
    card: {
      width: '100%',
      height: 'auto',
      padding: '2px 10px',
      elevation: 2,
      margin: '10px 10px',
      color: theme.palette.primary.main,
      backgroundColor: '#FBFCFC',
      borderRadius: '10px',
      boxShadow: '2px 3px #ECF0F1',
      transition: '0.5s ease-in-out',
      '&:hover': {
        transform: 'translateY(-10px)',
      },
      '@media (min-width: 768px)': {
        width: '100%',
        height: '270px',
      },
    },
    cardheader: {
      width: '100%',
      margin: '10px',
      alignSelf: 'center',
      color: '#922B21',
      fontSize: 12,
    },
    cardmedia: {
      display: 'flex',
      alignItems: 'center',
      margin: 'auto',
      width: '100%',
      height: 150,
      paddingTop: 5,
    },
    img: {
      width: 200,
      height: 120,
      margin: 'auto',
    },
    cardcontent: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    typotop: {
      fontSize: '0.75rem',
      color: '#AAB7B8',
    },
    typobottom: {
      fontSize: '1rem',
      color: '#AAB7B8',
    },
  }),
);

interface Props {
  details: any;
}

function MyCard(props: Props) {
  const classes = useStyles();
  const allCards = props.details.map((c: any, i: number) => (
    <Card key={i} className={classes.card}>
      <p className={classes.cardheader}>{c.header}</p>
      <div className={classes.cardmedia}>
        <img src={c.image} className={classes.img} alt="default" />
      </div>
      <CardContent className={classes.cardcontent}>
        <Typography className={classes.typotop}>{c.footer.top}</Typography>
        <Typography className={classes.typobottom}>{c.footer.bottom}</Typography>
      </CardContent>
    </Card>
  ));
  return allCards;
}

export default function Offer() {
  const classes = useStyles();
  return (
    <div className={classes.mycards}>
      <MyCard details={CardDetails} />
    </div>
  );
}
