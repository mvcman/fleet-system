import UnorderList from '../UnorderList';
import { React, mount, shallow, Adapter, render, configure, Router } from './config';

let isOpen = true;

const list: any = [{ name: 'mandar', route: '/' }];

function handleToggle() {
  return true;
}

configure({ adapter: new Adapter() });

describe('The Links in list format', () => {
  const wrapper = mount(
    <Router>
      <UnorderList prev_opt="Nav1" next_opt="Nav2" handleToggle={handleToggle} isOpen={isOpen} list={list} />
    </Router>,
  );

  it('Should Render', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should contain only one ul tag', () => {
    const ul = wrapper.find('ul');
    expect(ul).toHaveLength(1);
  });

  it('Should contain list size of 1', () => {
    const list = wrapper.find('li');
    expect(list).toHaveLength(1);
  });

  it('If isOpen == true the className should be Nav1', () => {
    isOpen = true;
    const wrapper1 = mount(
      <Router>
        <UnorderList prev_opt="Nav1" next_opt="Nav2" handleToggle={handleToggle} isOpen={isOpen} list={list} />
      </Router>,
    );
    expect(wrapper1.find('ul').hasClass('Nav1')).toBeTruthy();
  });

  it('If isOpen == true the className should be Nav1', () => {
    isOpen = false;
    const wrapper1 = mount(
      <Router>
        <UnorderList prev_opt="Nav1" next_opt="Nav2" handleToggle={handleToggle} isOpen={isOpen} list={list} />
      </Router>,
    );
    expect(wrapper1.find('ul').hasClass('Nav2')).toBeTruthy();
  });
});
