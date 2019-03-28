import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../OrderForm';
import Layout from '../Layout';

class CreateOrderPage extends Component {
  handleFieldChange = event => {
    const { name, value } = event.target;
    const { ordersActions } = this.props;

    ordersActions.updateNewOrder(name, value);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { ordersActions } = this.props;

    ordersActions.createOrder();
  };

  render() {
    const { newOrder } = this.props;

    return (
      <Layout>
        <h2 className="mb-4">Levantar pedido</h2>
        <OrderForm
          clientPhone={newOrder.client_phone}
          clientAddress={newOrder.client_address}
          clientName={newOrder.client_name}
          order={newOrder.order}
          onFieldChange={this.handleFieldChange}
          onSubmit={this.handleSubmit}
        />
      </Layout>
    );
  }
}

CreateOrderPage.propTypes = {
  newOrder: PropTypes.object.isRequired,
  ordersActions: PropTypes.object.isRequired
};

export default CreateOrderPage;
