import React from 'react';
import AdminLogin from './AdminLogin';
import { shallow } from 'enzyme';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';

describe('AdminLogin', () => {
  test('it renders', () => {
    const WrappedComponent = withRouter(AdminLogin);

    const wrapper = shallow(
      <Router>
        <WrappedComponent />
      </Router>
    );

    expect(wrapper).toBeTruthy();
  });
});
