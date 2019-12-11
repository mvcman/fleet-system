import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

export { React, mount, shallow, Adapter, render, configure, Router };
