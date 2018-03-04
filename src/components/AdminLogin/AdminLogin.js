import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './AdminLogin.css';
import { authenticateUser } from '../../modules/authenticate';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };
  }

  handleChange = (evt, key) => {
    this.setState({
      [key]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.authenticateUser({
      userName: this.state.userName,
      password: this.state.password
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="admin-login-form">
        <div className="label-input-container">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            value={this.state.userName}
            onChange={e => this.handleChange(e, 'userName')}
          />
        </div>

        <div className="label-input-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            value={this.state.password}
            onChange={e => this.handleChange(e, 'password')}
          />
        </div>
        <input type="submit" value="Submit" className="submit-input" />
        {this.props.invalidCredentials && (
          <p>Invalid Credentials. Try again</p>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  invalidCredentials: state.authenticate.invalidCredentials
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authenticateUser
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
);
