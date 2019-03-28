import * as USER_CONSTANTS from '../constants/userConstants';
import userService from '../services/userService';
import history from '../utils/history';

// Handle username changes
export const setUsername = username => ({
  type: USER_CONSTANTS.SET_USERNAME,
  username
});

// Handle password changes
export const setPassword = password => ({
  type: USER_CONSTANTS.SET_PASSWORD,
  password
});

// Sign in user to get auth token
export const signIn = () => {
  return (dispatch, getState) => {
    function success() {
      return { type: USER_CONSTANTS.LOGGED_IN };
    }

    const { username, password } = getState().user;

    userService.signIn(
      {
        username,
        password
      },
      () => {
        dispatch(success());
        history.push('/');
      }
    );
  };
};

// Sign out user
export const signOut = () => {
  return dispatch => {
    function success() {
      return { type: USER_CONSTANTS.LOGGED_OUT };
    }

    userService.signOut();
    dispatch(success());
  };
};
