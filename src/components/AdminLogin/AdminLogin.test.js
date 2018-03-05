import React from 'react';
import AdminLogin from './AdminLogin';
import { shallow } from 'enzyme';
import { authenticateUser, initialState } from '../../modules/authenticate';

const initialProps = initialState;

describe('AdminLogin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AdminLogin.WrappedComponent />);
  });

  test('it renders', () => {
    expect(wrapper).toBeTruthy();
  });

  test('it calls onSubmit and authenticateUser', () => {
    const authenticateUser = jest.fn();
    const props = {
      ...initialProps,
      authenticateUser
    };
    wrapper = shallow(<AdminLogin.WrappedComponent {...props} />);
    const adminLoginForm = wrapper.find('.admin-login-form');

    expect(adminLoginForm.length).toBe(1);

    adminLoginForm.simulate('submit', {
      preventDefault() {}
    });

    expect(authenticateUser).toHaveBeenCalled();
  });
});
