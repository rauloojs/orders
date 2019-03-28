import * as USER_CONSTANTS from '../constants/userConstants';
import { getItem } from '../services/localStorage';
import { AUTH_TOKEN } from '../services/api';

const token = getItem(AUTH_TOKEN);

const initialState = {
  username: '',
  password: '',
  isLoggedIn: !!token
};

function photosReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CONSTANTS.SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case USER_CONSTANTS.SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case USER_CONSTANTS.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        username: '',
        password: ''
      };
    case USER_CONSTANTS.LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default photosReducer;
