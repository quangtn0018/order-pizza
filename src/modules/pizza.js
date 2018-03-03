export const ORDER_COMPELTE = 'pizza/ORDER_COMPLETE';

const initialState = {
    orderCount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ORDER_COMPELTE:
            return {
                ...state,
                orderCount: state.orderCount + 1
            };

        default:
            return state;
    }
};


export const orderComplete = () => {
    return dispatch => {
        dispatch({
            type: ORDER_COMPELTE
        });
    };
};