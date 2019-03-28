import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import OrdersTable from '../OrdersTable';
import {
  subscribeToOnMessage,
  ORDER_CREATED,
  closeSocket
} from '../../services/ordersSocket';
import Layout from '../Layout';
import Pagination from '../Pagination';

class OrdersPage extends Component {
  componentDidMount() {
    subscribeToOnMessage({ [ORDER_CREATED]: this.handleOrderCreated });

    const { ordersActions } = this.props;
    ordersActions.fetchOrders();
  }

  componentWillUnmount() {
    closeSocket();
  }

  handleFetchOrders = () => {
    const { ordersActions } = this.props;
    ordersActions.fetchOrders();
  };

  handlePageChange = page => {
    const { ordersActions } = this.props;
    ordersActions.updatePage(page);
    ordersActions.fetchOrders();
  };

  handleOrderCreated = order => {
    const { ordersActions } = this.props;
    ordersActions.appendOrder(order);

    toastr.info('Nuevo pedido', order.client_name);
  };

  render() {
    const { isLoggedIn, location, newOrders, orders, count, page } = this.props;
    return (
      <Layout>
        {isLoggedIn ? (
          <div>
            {newOrders.length > 0 && (
              <React.Fragment>
                <h2 className="mb-4">Nuevos pedidos</h2>
                <OrdersTable orders={newOrders} />
              </React.Fragment>
            )}
            <h2 className="mb-4">Lista de pedidos</h2>
            <OrdersTable orders={orders} />{' '}
            {count > 10 && (
              <Pagination
                totalCount={count}
                itemsPerPage={10}
                activePage={page}
                onPageChange={this.handlePageChange}
              />
            )}
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: location
              }
            }}
          />
        )}
      </Layout>
    );
  }
}

OrdersPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  orders: PropTypes.array.isRequired,
  newOrders: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  ordersActions: PropTypes.object.isRequired
};

export default OrdersPage;
