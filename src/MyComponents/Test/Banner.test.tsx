import { React, mount, shallow, Adapter, render, configure, Router } from './config';
import Banner from '../Banner';

configure({ adapter: new Adapter() });

describe('The Banner component', () => {
  const wrapper = mount(
    <Router>
      <Banner title="demo" subtitle="demo123">
        <button type="button" className="btn-primary">
          Btn
        </button>
      </Banner>
    </Router>,
  );

  //   it('Should contain only a className Banner', () => {
  //     const div = wrapper.find('div');
  //     expect(div.hasClass('banner')).toBeTruthy();
  //   });

  it('Should contain children one button', () => {
    const btn = wrapper.find('button');
    expect(btn).toHaveLength(1);
  });

  it('Should contain one h1 element', () => {
    const h1 = wrapper.find('h1');
    expect(h1).toHaveLength(1);
  });

  it('Should contain one p tag', () => {
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
  });
});
