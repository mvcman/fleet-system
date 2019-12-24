import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

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
      overflowX: 'auto',
      padding: 30,
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

function createData(name: string, source: string, destination: string, busnumber: string, time: string) {
  return { name, source, destination, busnumber, time };
}

const rows = [
  createData('Mamta Travels', 'Thane', 'Vashi', 'BS123', '04:00 PM'),
  createData('Mamta Travels', 'Vashi', 'Thane', 'BS123', '04:00 PM'),
  createData('Mamta Travels', 'Vikroli', 'Thane', 'BS123', '04:00 PM'),
  createData('Mamta Travels', 'Thane', 'Vikroli', 'BS123', '04:00 PM'),
  createData('Mamta Travels', 'Vashi', 'Mumbai', 'BS123', '04:00 PM'),
];

export default function CustomizedTables() {
  const classes = useStyles();

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
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.source}</StyledTableCell>
              <StyledTableCell align="center">{row.destination}</StyledTableCell>
              <StyledTableCell align="center">{row.busnumber}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">
                <button className={classes.btn}>
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
