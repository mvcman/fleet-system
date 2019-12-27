import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/bus2.jpg';

const useStyles = makeStyles(theme => ({
  contactRoot: {
    padding: '10px 20px',
    '@media (min-width: 768px)': {
      padding: '20px 70px',
    },
    '@media (min-width: 1080px)': {
      // border:'2px solid red',
      display: 'flex',
      // width:'80%',
      flexDirection: 'row',
      padding: '20px 200px',
      justifyContent: 'center',
    },
  },
  root: {
    height: '100vh',
    '@media (min-width: 1800px)': {
      height: '70vh',
    },
  },
  image: {
    backgroundImage: `url(${Image})`,
    // opacity:'0.5',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  info: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  contactpaper: {
    margin: '20px 10px',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      padding: '60px 40px',
    },
  },
  paper: {
    margin: '20px 10px',
    padding: '10px 1Palet0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      padding: '10px 15px',
      margin: '10px 0px 10px 0px',
    },
  },
  paper1: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  form1: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    // width:'40%',
    // display:'flex',
    alignItems: 'center',
    margin: theme.spacing(3, 0, 2),
  },
  message: {
    height: '50%',
  },
}));

export default useStyles;
