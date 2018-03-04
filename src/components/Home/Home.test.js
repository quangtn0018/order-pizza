import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  test('it renders', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toBeTruthy();
  });
});
