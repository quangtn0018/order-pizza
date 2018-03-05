import React from 'react';
import Home from './Home';
import PizzaOrdering from '../PizzaOrdering/PizzaOrdering';
import { shallow } from 'enzyme';
import { initialState } from '../../modules/pizza';

const initialProps = initialState;

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('it renders', () => {
    expect(wrapper).toBeTruthy();
  });

  test('it renders PizzaOrdering', () => {
    const props = {
      ...initialProps
    };
    wrapper = shallow(<Home.WrappedComponent {...props} />);

    expect(wrapper.find(PizzaOrdering).length).toBe(1);
  });
});
