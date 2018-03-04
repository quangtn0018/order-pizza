export const ORDER_COMPELTE = 'pizza/ORDER_COMPLETE';
export const FETCH_PIZZA_DATA = 'pizza/FETCH_PIZZA_DATA';
export const UPDATE_PIZZA_DATA_PRICES = 'pizza/UPDATE_PIZZA_DATA_PRICES';

const initialState = {
  orderCount: 0,
  pizzaData: [],
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_COMPELTE:
      return {
        ...state,
        orderCount: state.orderCount + 1,
        orders: action.payload
          ? [...state.orders, action.payload]
          : state.orders
      };
    case FETCH_PIZZA_DATA:
      return {
        ...state,
        pizzaData: action.payload || state.pizzaData
      };
    case UPDATE_PIZZA_DATA_PRICES:
      return {
        ...state,
        pizzaData: action.payload || state.pizzaData
      };
    default:
      return state;
  }
};

export const orderComplete = order => {
  return dispatch => {
    dispatch({
      type: ORDER_COMPELTE,
      payload: order
    });
  };
};

export const fetchPizzaData = () => {
  return dispatch => {
    fetch('/pizzaData')
      .then(res => res.json())
      .then(pizzasData => {
        dispatch({
          type: FETCH_PIZZA_DATA,
          payload: pizzasData
        });
      });
  };
};

// TODO post to backend and update data
// TODO notification when update is successful/unsuccesful
export const updatePizzaDataPrices = pizzaData => {
  return dispatch => {
    dispatch({
      type: UPDATE_PIZZA_DATA_PRICES,
      payload: pizzaData
    });
  };
};
