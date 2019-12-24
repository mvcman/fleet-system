import { React, mount, shallow, Adapter, render, configure, Router } from '../Test/config';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Test Card Component!', () => {
  const wrapper = mount(<Card title="Card" description="This is a card component" />);

  it('Should contain one h3 element', () => {
    const h3 = wrapper.find('h3');
    expect(h3).toHaveLength(1);
  });

  it('Should contain one p tag', () => {
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
  });
});
