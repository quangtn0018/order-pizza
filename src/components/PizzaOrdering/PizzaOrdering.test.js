import React from 'react';
import PizzaOrdering from './PizzaOrdering';
import { shallow } from 'enzyme';
import { initialState } from '../../modules/pizza';

const toppings = [
  {
    key: 'chicken',
    value: 'Chicken',
    price: 1.25,
    isActive: false
  }
];

const sizes = [
  {
    key: 'small',
    value: '10" Small',
    price: 10,
    isActive: false
  }
];

const initialProps = initialState;

describe('PizzaOrdering', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      ...initialProps,
      pizzaData: {
        toppings,
        sizes
      }
    };
    wrapper = shallow(<PizzaOrdering.WrappedComponent {...props} />);
  });

  test('it renders', () => {
    expect(wrapper).toBeTruthy();
  });

  test('it renders toppings and sizes', () => {
    const liContainers = wrapper.find('.li-container');
    expect(liContainers.length).toBe(2);

    const renderedToppings = liContainers.at(0);
    expect(renderedToppings.length).toBe(1);

    const renderedSizes = liContainers.at(1);
    expect(renderedSizes.length).toBe(1);

    const toppingValueElement = <span>{toppings[0].value}</span>;
    const sizeValueElement = <span>{sizes[0].value}</span>;

    expect(wrapper.contains(toppingValueElement)).toBe(true);
    expect(wrapper.contains(sizeValueElement)).toBe(true);
  });
});
