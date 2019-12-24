import React from 'react';
import Card from './Card/Card';
import { busFeatures } from './constants';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    features1: {
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
  }),
);

interface Props {
  features: any[];
}

function MyFeatures(props: Props) {
  const AllCards: any = props.features.map((f: any, i: number) => (
    <Card key={i} title={f.title} description={f.description} logo={f.logo} />
  ));
  return AllCards;
}

function Features() {
  const classes = useStyles();
  return (
    <div className={classes.features1}>
      <MyFeatures features={busFeatures} />
    </div>
  );
}

export default Features;
