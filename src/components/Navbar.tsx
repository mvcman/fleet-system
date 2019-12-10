import React, { Component } from 'react';
import logo from '../images/bus.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UnorderList from '../MyComponents/UnorderList';

interface State {
  isOpen: boolean;
}

const navigationlist = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/contact',
    name: 'Contact Us',
  },
  {
    route: '/booking',
    name: 'Booking',
  },
  {
    route: '/login',
    name: 'Login',
  },
];

export default class Navbar extends Component<{}, State> {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbar1">
        <div className="nav-center1">
          <div className="nav-header1">
            <Link to="/">
              <img width={40} height={40} src={logo} alt="mylogo1" />
            </Link>
            <button type="button" className="nav-btn1" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon1" />
            </button>
          </div>
          <UnorderList
            prev_opt="nav-links1 show-nav1"
            next_opt="nav-links1"
            handleToggle={this.handleToggle}
            list={navigationlist}
            isOpen={this.state.isOpen}
          />
          {/* <ul className={this.state.isOpen ? 'nav-links1 show-nav1' : 'nav-links1'}>
            <li>
              <Link to="/" onClick={this.handleToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.handleToggle}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={this.handleToggle}>
                Booking
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={this.handleToggle}>
                Login
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}
