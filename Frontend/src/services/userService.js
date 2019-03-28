import { AUTH_TOKEN, login, setAuthHeader } from './api';
import { setItem, removeItem } from './localStorage';
import history from '../utils/history';

// Sign in user to get token for authentication
const signIn = async (user, callback) => {
  const {
    data: { token }
  } = await login(user);

  setAuthHeader(token);

  setItem(AUTH_TOKEN, token);
  callback();
};

// Sign out user by simply removing auth token
const signOut = () => {
  removeItem(AUTH_TOKEN);
  history.push('/login');
};

export default {
  signIn,
  signOut
};
