import { toastr } from 'react-redux-toastr';
import * as ORDERS_CONSTANTS from '../constants/ordersConstants';
import { getOrders, postOrder } from '../services/api';

// Fetchs paginated orders and stores them
export const fetchOrders = () => {
  return (dispatch, getState) => {
    function request() {
      return { type: ORDERS_CONSTANTS.FETCH_ORDERS };
    }

    function success(orders, count, offset) {
      return { type: ORDERS_CONSTANTS.SET_ORDERS, orders, count, offset };
    }

    const { page } = getState().orders;

    dispatch(request());

    getOrders(page).then(({ data }) => {
      dispatch(success(data.results, data.count, data.offset));
    });
  };
};

// Append new order comming from socket notification
export const appendOrder = order => ({
  type: ORDERS_CONSTANTS.APPEND_ORDER,
  order
});

// Update new order object
export const updateNewOrder = (field, data) => ({
  type: ORDERS_CONSTANTS.UPDATE_NEW_ORDER,
  field,
  data
});

// Update current page
export const updatePage = page => ({
  type: ORDERS_CONSTANTS.UPDATE_PAGE,
  page
});

// Post new order
export const createOrder = () => {
  function success() {
    toastr.success('Pedido creado con éxito');
    return { type: ORDERS_CONSTANTS.ORDER_CREATED };
  }

  function fail(error) {
    const errors = Object.keys(error).map(key => `${key}: ${error[key]}`);
    toastr.error('No fue posible crear el pedido', errors.toString());
  }

  return (dispatch, getState) => {
    const { newOrder } = getState().orders;

    postOrder(newOrder).then(
      () => {
        dispatch(success());
      },
      error => {
        fail(error.response.data);
      }
    );
  };
};
