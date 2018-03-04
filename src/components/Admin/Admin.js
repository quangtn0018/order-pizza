import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminLogin from '../AdminLogin/AdminLogin';
import AdminModify from '../AdminModify/AdminModify';

class Admin extends React.Component {
  renderAdminView() {
    if (!this.props.isLoggedIn) {
      return <AdminLogin />;
    }

    return <AdminModify />;
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        {this.renderAdminView()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authenticate.isLoggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
