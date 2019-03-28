import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import OrderRow from '../OrderRow';

const OrdersTable = ({ orders }) => (
  <div>
    <Table responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Orden</th>
          <th>Hora/Fecha</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </Table>
  </div>
);

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrdersTable;
