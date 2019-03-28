import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateOrderPage from '../../components/CreateOrderPage';
import * as ordersActions from '../../actions/ordersActions';

function mapDispatchToProps(dispatch) {
  return {
    ordersActions: bindActionCreators(ordersActions, dispatch),
    dispatch
  };
}

const mapStateToProps = state => ({ newOrder: state.orders.newOrder });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrderPage);
