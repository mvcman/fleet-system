import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface Props {
  title: string;
  description: string;
  logo?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      padding: '2px 10px',
      elevation: 5,
      margin: '10px 10px',
      color: theme.palette.primary.main,
      backgroundColor: '#FBFCFC',
      transition: '0.5s ease-in-out',
      borderRadius: '10px',
      boxShadow: '2px 3px #ECF0F1',
      border: '0.5px solid gray',
      fontFamily: theme.typography.fontFamily,
      '&:hover': {
        transform: 'translateY(-10px)',
        backgroundColor: '#FBFCF24',
      },
      '@media (min-width: 768px)': {
        width: '100%',
        height: '250px',
      },
    },
    div: {
      margin: '30px auto',
      color: theme.palette.primary.main,
    },
    h3: {
      color: '#AAB7B8',
    },
    p: {
      marginTop: '20px',
      color: 'maroon',
    },
  }),
);

export default function Card(props: Props) {
  const classes = useStyles();
  const logo: any = props.logo;
  return (
    <div className={classes.card}>
      <div className={classes.div}>{logo}</div>
      <h3 className={classes.h3}>{props.title}</h3>
      <p className={classes.p}>{props.description}</p>
    </div>
  );
}
