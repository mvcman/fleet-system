import React, { useEffect, useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { fetchRoutes } from '../APIS';
import { connect } from 'react-redux';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
      color: theme.palette.common.black,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.secondary.light,
      },
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 'auto',
      overflowX: 'auto',
      padding: '30px 0',
      '@media (min-width: 768px)': {
        padding: 30,
        height: '100vh',
      },
    },
    table: {
      minWidth: 700,
    },
    btn: {
      display: 'inline-block',
      textDecoration: 'none',
      letterSpacing: 3,
      color: theme.palette.common.black,
      background: theme.palette.primary.light,
      padding: '0.2rem 0.5rem',
      border: `1px solid ${theme.palette.primary.light}`,
      transition: 'all 0.3s linear',
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:hover': {
        background: 'transparent',
        color: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.light}`,
      },
    },
  }),
);
interface Props {
  id: number;
  name: string;
  source: string;
  destination: string;
  busNumber: string;
  time: string;
}
// function createData(name: string, source: string, destination: string, busnumber: string, time: string) {
//   return { name, source, destination, busnumber, time };
// }

// const routes = [
//   createData('Mamta Travels', 'Thane', 'Vashi', 'BS123', '04:00 PM'),
//   createData('Mamta Travels', 'Vashi', 'Thane', 'BS123', '04:00 PM'),
//   createData('Mamta Travels', 'Vikroli', 'Thane', 'BS123', '04:00 PM'),
//   createData('Mamta Travels', 'Thane', 'Vikroli', 'BS123', '04:00 PM'),
//   createData('Mamta Travels', 'Vashi', 'Mumbai', 'BS123', '04:00 PM'),
// ];

async function getData() {
  const data = await fetchRoutes();
  console.log('Inside get data', data);
  return data;
}

interface ReduxProps {
  dispatch: any;
}

function TableComponent(props: ReduxProps) {
  const classes = useStyles();
  // let routes = null;
  const [routes, setRoutes] = useState<any>([]);
  useEffect(() => {
    async function myData() {
      const r: any = await getData();
      await setRoutes(r);
      console.log('Your data is', r);
    }
    myData();
  }, []);
  // const routes: any = getData();
  // console.log('kflajsfajf', routes);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {['Name', 'Source', 'Destination', 'BusNumber', 'Time', 'Book'].map((name, i) => (
              <StyledTableCell key={i} align="center">
                {name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map((row: Props, i: number) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.source}</StyledTableCell>
              <StyledTableCell align="center">{row.destination}</StyledTableCell>
              <StyledTableCell align="center">{row.busNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">
                <button className={classes.btn} onClick={() => props.dispatch({ type: 'ROUTE', payload: row.id })}>
                  <Link style={{ textDecoration: 'none' }} to="/bookbus">
                    Book
                  </Link>
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default connect()(TableComponent);
