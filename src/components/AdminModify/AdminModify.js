import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../modules/authenticate';
import { updatePizzaDataPrices } from '../../modules/pizza';
import './AdminModify.css';

class AdminModify extends React.Component {
  constructor(props) {
    super(props);

    const { toppings, sizes } = props.pizzaData;

    this.state = {
      toppings,
      sizes
    };
  }

  handleChange = (evt, itemType, itemKey) => {
    // TODO errors when value is empty
    if (!evt.target.value) {
      return
    }
    
    let items = this.state[itemType].map(item => {
      return {
        ...item,
        price:
          item.key === itemKey ? parseInt(evt.target.value, 10) : item.price
      };
    });

    this.setState({
      [itemType]: items
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const pizzaData = {
      toppings: this.state.toppings,
      sizes: this.state.sizes
    };

    this.props.updatePizzaDataPrices(pizzaData);
  };

  handleLogOutOnClick = () => {
    this.props.logOut();
  };

  renderToppings() {
    return this.state.toppings.map(topping => {
      return (
        <div key={topping.key} className="label-input-container">
          <label htmlFor={topping.key}>{topping.value}</label>
          <div>
            <span>$ </span>
            <input
              id={topping.key}
              type="number"
              step="0.01"
              min="0"
              max="999"
              value={topping.price}
              onChange={e => this.handleChange(e, 'toppings', topping.key)}
            />
          </div>
        </div>
      );
    });
  }

  renderSizes() {
    return this.state.sizes.map(size => {
      return (
        <div key={size.key} className="label-input-container">
          <label htmlFor={size.key}>{size.value}</label>
          <div>
            <span>$ </span>
            <input
              id={size.key}
              type="number"
              step="0.01"
              min="0"
              max="999"
              value={size.price}
              onChange={e => this.handleChange(e, 'sizes', size.key)}
            />
          </div>
        </div>
      );
    });
  }

  renderPizzaData() {
    return (
      <form onSubmit={this.handleSubmit} className="admin-modify-form">
        <div>
          <h3>Toppings</h3>
          {this.renderToppings()}
        </div>
        <div>
          <h3>Sizes</h3>
          {this.renderSizes()}
        </div>
        <input type="submit" value="Submit" className="submit-input" />
      </form>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogOutOnClick}>Log Out</button>
        <h2>You may change the prices for any toppings and sizes</h2>
        {this.renderPizzaData()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pizzaData: state.pizza.pizzaData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logOut,
      updatePizzaDataPrices
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminModify)
);
