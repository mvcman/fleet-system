import { React, mount, shallow, Adapter, render, configure, Router } from './config';
import Hero from '../Hero';

configure({ adapter: new Adapter() });

describe('The Hero component', () => {
  const wrapper = mount(
    <Router>
      <Hero hero="demo">
        <h1>Testing Hero!</h1>
      </Hero>
    </Router>,
  );

  it('Should contain only a className hero', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('demo')).toBeTruthy();
  });

  it('Should contain children h1', () => {
    const list = wrapper.find('h1');
    expect(list).toHaveLength(1);
  });
});
