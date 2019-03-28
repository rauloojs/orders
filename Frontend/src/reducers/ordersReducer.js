import * as ORDERS_CONSTANTS from '../constants/ordersConstants';

const initialNewOrder = {
  client_phone: '',
  client_address: '',
  client_name: '',
  order: ''
};

const initialState = {
  newOrder: {
    ...initialNewOrder
  },
  list: [],
  new: [],
  count: 0,
  offset: 0,
  page: 1,
  loading: false
};

function photosReducer(state = initialState, action) {
  switch (action.type) {
    case ORDERS_CONSTANTS.FETCH_ORDERS:
      return {
        ...state,
        loading: true
      };
    case ORDERS_CONSTANTS.SET_ORDERS:
      return {
        ...state,
        list: action.orders,
        count: action.count,
        offset: action.offset,
        loading: false
      };
    case ORDERS_CONSTANTS.APPEND_ORDER:
      return {
        ...state,
        new: [action.order, ...state.new]
      };
    case ORDERS_CONSTANTS.UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case ORDERS_CONSTANTS.UPDATE_NEW_ORDER:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          [action.field]: action.data
        }
      };
    case ORDERS_CONSTANTS.ORDER_CREATED:
      return {
        ...state,
        newOrder: {
          ...initialNewOrder
        }
      };
    default:
      return state;
  }
}

export default photosReducer;
