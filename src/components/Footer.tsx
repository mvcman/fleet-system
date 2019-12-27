import React from 'react';
import { Link } from 'react-router-dom';
import { Links } from './constants';
import { Network } from './constants';

interface Props {
  home: any;
  contact: any;
  booking: any;
  login: any;
}
interface Contact {
  ph_no: string;
  email: string;
}
interface Social {
  follow: any;
}
function MyLink(props: Props) {
  return (
    <div>
      <Link to={props.home.link}>
        <h6>{props.home.name}</h6>
      </Link>
      <Link to={props.contact.link}>
        <h6>{props.contact.name}</h6>
      </Link>
      <Link to={props.booking.link}>
        <h6>{props.booking.name}</h6>
      </Link>
      <Link to={props.login.link}>
        <h6>{props.login.name}</h6>
      </Link>
    </div>
  );
}
function Contact(props: Contact) {
  return (
    <div>
      <h6>{props.ph_no}</h6>
      <h6>{props.email}</h6>
    </div>
  );
}

function Social(props: Social) {
  return (
    <div className="social">
      <props.follow.logo className="nav-icon2" />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="row offset-1">
        <div className="col-md-6 col-12">
          <h3>Quick Links</h3>
          <MyLink home={Links[0]} contact={Links[1]} booking={Links[2]} login={Links[3]} />
        </div>
        <div className="row-md-6 col-md-6 col-12">
          <h3>Contact Us</h3>
          <div>
            <Contact ph_no="091 9896846854" email="contact@gmail.com" />
          </div>
          <div>
            <h3>Follow Us On</h3>
            <div className="row col-md-12 col-12">
              <Social follow={Network[0]} />
              <Social follow={Network[1]} />
              <Social follow={Network[2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
