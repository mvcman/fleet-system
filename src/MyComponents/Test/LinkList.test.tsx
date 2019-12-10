import React from 'react';
import LinkList from '../LinkList';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

const list = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
];

function handleToggle() {
  return true;
}

configure({ adapter: new Adapter() });

describe('The Links in list format', () => {
  const wrapper = mount(
    <Router>
      <LinkList list={list} handleToggle={handleToggle} />
    </Router>,
  );

  it('Should Render', () => {
    expect(wrapper).toBeValid;
  });

  it('Should contain list size of 3', () => {
    const list = wrapper.find('li');
    expect(list).toHaveLength(3);
  });
});
