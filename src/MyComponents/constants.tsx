import { FaSnowflake, FaRupeeSign, FaWifi, FaUsers, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react';

export const Links: any[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Contact us',
    link: '/contact',
  },
  {
    name: 'Booking',
    link: '/booking',
  },
  {
    name: 'Login',
    link: '/login',
  },
];
export const busFeatures: any[] = [
  {
    logo: <FaRupeeSign className="nav-icon2" />,
    title: 'Lowest price',
    description: 'We provide the lowest prices!',
  },
  {
    logo: <FaSnowflake className="nav-icon2" />,
    title: 'AC',
    description: 'All our buses are equipped with AC!',
  },
  {
    logo: <FaWifi className="nav-icon2" />,
    title: 'Wifi Enabled',
    description: 'All are buses are wifi enabled!',
  },
  {
    logo: <FaUsers className="nav-icon2" />,
    title: 'User Experience',
    description: 'We provide great user experience!',
  },
];

export const Network: any[] = [
  {
    logo: FaFacebook,
  },
  {
    logo: FaInstagram,
  },
  {
    logo: FaTwitter,
  },
];
