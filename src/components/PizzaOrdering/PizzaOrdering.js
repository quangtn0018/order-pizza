import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderComplete } from '../../modules/pizza';
import './PizzaOrdering.css';

class PizzaOrdering extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaDataReceived: false,
      toppings: props.pizzaData.toppings || null,
      sizes: props.pizzaData.sizes || null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.pizzaData && this.state.pizzaDataReceived) {
      return;
    }

    const toppings = nextProps.pizzaData.toppings;
    const sizes = nextProps.pizzaData.sizes;

    this.setState({
      toppings,
      sizes,
      pizzaDataReceived: true // only need to get toppings and sizes once
    });
  }

  getListItemClassNames(item) {
    return `li-container card ${item.isActive ? 'li-selected' : ''}`;
  }

  renderPizzasToppings() {
    if (!this.state.toppings) {
      return;
    }

    return (
      <ul>
        <h3>Toppings</h3>
        {this.state.toppings.map(topping => {
          return (
            <li
              key={topping.key}
              className={this.getListItemClassNames(topping)}
              tabIndex="0"
              onClick={() =>
                this.handleListItemOnClick(topping.key, 'toppings')
              }>
              <span>{topping.value}</span>
              <span className="prices-text">${topping.price}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  renderPizzasSizes() {
    if (!this.state.sizes) {
      return;
    }

    return (
      <ul>
        <h3>Sizes</h3>
        {this.state.sizes.map(size => {
          return (
            <li
              key={size.key}
              className={this.getListItemClassNames(size)}
              tabIndex="0"
              onClick={() => this.handleListItemOnClick(size.key, 'sizes')}>
              <span>{size.value}</span>
              <span className="prices-text">${size.price}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  isOrderComplete() {
    if (!this.state.toppings && !this.state.sizes) {
      return;
    }

    const toppings = this.state.toppings;
    const sizes = this.state.sizes;
    const hasOneActive = item => {
      return item.isActive;
    };

    return toppings.some(hasOneActive) && sizes.some(hasOneActive);
  }

  handleListItemOnClick(key, itemType) {
    let item = this.state[itemType];

    if (itemType === 'toppings') {
      const toppings = item.map(topping => {
        return {
          ...topping,
          isActive: key === topping.key ? !topping.isActive : topping.isActive
        };
      });

      this.setState({
        toppings
      });
    } else {
      const sizes = item.map(size => {
        return {
          ...size,
          isActive: key === size.key ? !size.isActive : false
        };
      });

      this.setState({
        sizes
      });
    }
  }

  resetSelectedItems() {
    if (!this.state.toppings && !this.state.sizes) {
      return;
    }

    const toppings = this.state.toppings.map(topping => {
      return {
        ...topping,
        isActive: false
      };
    });

    const sizes = this.state.sizes.map(size => {
      return {
        ...size,
        isActive: false
      };
    });

    this.setState({
      toppings,
      sizes
    });
  }

  handleOrderCompleteOnClick = () => {
    const toppings = this.state.toppings.filter(topping => {
      return topping.isActive;
    });

    const size = this.state.sizes.filter(size => {
      return size.isActive;
    })[0];

    const reducer = (accumulator, currentItem) => {
      return {
        price: accumulator.price + currentItem.price
      };
    };

    const accumulator = toppings.reduce(reducer, { price: 0 });
    const totalPrice = accumulator.price + size.price;

    const order = {
      toppings,
      size,
      orderNumber: this.props.orderCount + 1,
      totalPrice
    };

    this.resetSelectedItems();
    this.props.orderComplete(order);
  };

  render() {
    return (
      <div>
        <div className="toppings-sizes-container">
          {this.renderPizzasToppings()}
          {this.renderPizzasSizes()}
        </div>

        <button
          onClick={this.handleOrderCompleteOnClick}
          disabled={!this.isOrderComplete()}>
          Complete your order
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderCount: state.pizza.orderCount,
  pizzaData: state.pizza.pizzaData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      orderComplete
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PizzaOrdering)
);
