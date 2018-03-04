import React from 'react';
import renderer from 'react-test-renderer';
import PizzaOrdering from './PizzaOrdering';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

describe('PizzaOrdering', () => {
  test('it renders', () => {
    const wrapper = shallow(
      <Router>
        <PizzaOrdering />
      </Router>
    );

    expect(wrapper).toBeTruthy();
  });
});
