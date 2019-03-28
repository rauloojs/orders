import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OrdersPage from '../../components/OrdersPage';
import * as ordersActions from '../../actions/ordersActions';

function mapDispatchToProps(dispatch) {
  return {
    ordersActions: bindActionCreators(ordersActions, dispatch),
    dispatch
  };
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  orders: state.orders.list,
  newOrders: state.orders.new,
  count: state.orders.count,
  page: state.orders.page
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPage);
