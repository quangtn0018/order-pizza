import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';
import {
  orderComplete
} from '../../modules/pizza';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Select your pizza</h1>
        <p>Your Current Order Count: {this.props.orderCount}</p>



        <button onClick={this.props.orderComplete}>
          Complete your order
        </button>
        {/* <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>
            Increment
        </button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>
            Increment Async
        </button>
        </p>

        <p>
          <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>
            Decrement
        </button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>
            Decrement Async
        </button>
        </p>

        <p>
          <button onClick={() => this.props.changePage()}>
            Go to about page via redux
        </button>
        </p> */}
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
      orderComplete,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
