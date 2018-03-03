import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        show form to login
        then allow admin user to how forms so admin can change prices
    </div>
    )
  }
}

const mapStateToProps = state => ({
  orderCount: state.pizza.orderCount,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
