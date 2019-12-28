import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Bookbus from './components/Bookbus';
import ErrorPage from './components/ErrorPage';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import { createMuiTheme } from '@material-ui/core';
// import { blueGrey, pink } from '@material-ui/core/colors';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
// import GenghisKhan-Italic from './assets/genghis-khan/GenghisKhan-Italic.otf';

export const theme1 = createMuiTheme({
  palette: {
    primary: { main: '#2980B9' },
    secondary: { main: '#6A9A04' },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

export const theme2 = createMuiTheme({
  palette: {
    primary: { main: '#F3B00B' },
    secondary: { main: '#070501' },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export const theme3 = createMuiTheme({
  palette: {
    primary: { main: '#D35400' },
    secondary: { main: '#B3B6B7' },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export const theme4 = createMuiTheme({
  palette: {
    primary: { main: '#517067' },
    secondary: { main: '#34495E' },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export const theme5 = createMuiTheme({
  palette: {
    primary: { main: '#CF2F45' },
    secondary: { main: '#CCD1D1' },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export const theme6 = createMuiTheme({
  palette: {
    primary: { main: '#af9a7d' },
    secondary: { main: '#95A5A6' },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

function seatReducer(state = 0, action: { type: any; payload: number }) {
  switch (action.type) {
    case 'SEAT':
      return action.payload;
    default:
      return state;
  }
}

function routeIdReducer(state = 1, action: { type: any; payload: number }) {
  switch (action.type) {
    case 'ROUTE':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routeId: routeIdReducer,
  seatNumber: seatReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme6}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/bookbus" component={Bookbus} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
