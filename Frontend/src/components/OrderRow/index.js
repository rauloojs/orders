import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const OrderRow = ({ order }) => (
  <tr>
    <td>{order.client_name}</td>
    <td>{order.client_phone}</td>
    <td>{order.client_address}</td>
    <td>{order.order}</td>
    <td>{format(order.created_at, 'hh:mm a - DD/MMM/YY')}</td>
  </tr>
);

OrderRow.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderRow;
