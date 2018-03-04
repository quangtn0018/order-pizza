import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        show form to login then allow admin user to how forms so admin can
        change prices
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
