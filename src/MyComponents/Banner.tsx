import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface Props {
  title: string;
  subtitle: string;
  children?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      display: 'inline-block',
      background: 'rgba(0, 0, 0, 0.5)',
      color: theme.palette.primary.light,
      padding: '2rem 1rem',
      textAlign: 'center',
      textTransform: 'capitalize',
      letterSpacing: 3,
      fontFamily: theme.typography.fontFamily,
    },
    bannerDiv: {
      width: '10rem',
      height: 3,
      background: theme.palette.primary.light,
      margin: '1.7rem auto',
    },
    bannerH: {
      fontSize: '2.5rem',
    },
    bannerP: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
    },
  }),
);

export default function Banner(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <h1 className={classes.bannerH}>{props.title}</h1>
      <div className={classes.bannerDiv}></div>
      <p className={classes.bannerP}>{props.subtitle}</p>
      {props.children}
    </div>
  );
}
