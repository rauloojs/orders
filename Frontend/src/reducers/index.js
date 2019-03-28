import { reducer as toastr } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import user from './userReducer';
import orders from './ordersReducer';

export default combineReducers({ toastr, user, orders });
