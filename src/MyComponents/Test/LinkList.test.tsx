import LinkList from '../LinkList';
import { React, mount, shallow, Adapter, render, configure, Router } from './config';

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
    expect(wrapper).toBeDefined();
  });

  it('Should contain list size of 3', () => {
    const list = wrapper.find('li');
    expect(list).toHaveLength(3);
  });
});
