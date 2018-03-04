export const ORDER_COMPELTE = 'pizza/ORDER_COMPLETE';
export const FETCH_PIZZA_DATA = 'pizza/FETCH_PIZZA_DATA';

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
        pizzaData: action.payload ? action.payload : state.pizzaData
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
