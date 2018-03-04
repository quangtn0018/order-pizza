export const AUTHENTICATE_ADMIN = 'authenticate/AUTHENTICATE_ADMIN';
export const LOG_OUT = 'authenticate/LOG_OUT';

export const initialState = {
  isLoggedIn: false,
  invalidCredentials: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_ADMIN:
      return {
        ...state,
        isLoggedIn: action.payload || state.isLoggedIn,
        invalidCredentials: !action.payload || state.isLoggedIn
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        invalidCredentials: false
      };
    default:
      return state;
  }
};

export const authenticateUser = credentials => {
  return dispatch => {
    fetch('/authenticateUser')
      .then(res => res.json())
      .then(authenticationKeys => {
        const validCredentials =
          credentials.userName === authenticationKeys.userName &&
          credentials.password === authenticationKeys.password;
        dispatch({
          type: AUTHENTICATE_ADMIN,
          payload: validCredentials
        });
      });
  };
};

export const logOut = credentials => {
  return dispatch => {
    dispatch({
      type: LOG_OUT
    });
  };
};
