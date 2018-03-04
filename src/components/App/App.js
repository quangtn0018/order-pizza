import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import './App.css';
import { fetchPizzaData } from '../../modules/pizza';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPizzaData();
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/admin" className="admin-link">
            Admin
          </Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPizzaData
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
