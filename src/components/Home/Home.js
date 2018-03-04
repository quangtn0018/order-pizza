import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PizzaOrdering from '../PizzaOrdering/PizzaOrdering';
import './Home.css';

class Home extends React.Component {
  renderOrders() {
    if (!this.props.orders.length) {
      return;
    }

    return (
      <ul>
        {this.props.orders.map(order => {
          return (
            <li key={order.orderNumber}>
              <h4 className="align-right">Order # {order.orderNumber}</h4>
              <div className="order-sizes-container">
                <span>{order.size.value}</span>
                <span className="prices-text">${order.size.price}</span>
              </div>

              {order.toppings.map(topping => {
                return (
                  <div key={topping.key} className="order-toppings-container">
                    <span>{topping.value}</span>
                    <span className="prices-text">${topping.price}</span>
                  </div>
                );
              })}
              <p className="align-right">Total: ${order.totalPrice}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Select any toppings and a size to order your pizza</h1>
        <h2>Your order count: {this.props.orderCount}</h2>
        <div className="home-content-container">
          <PizzaOrdering />
          <div className="display-orders-container">
            <h2 className="align-right">Your Orders</h2>
            {this.renderOrders()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderCount: state.pizza.orderCount,
  orders: state.pizza.orders
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
