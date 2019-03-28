import axios from 'axios';
import { getItem } from './localStorage';

// Auth token constant to be used across the whole project
const AUTH_TOKEN = 'authToken';

// Create axios instance
const apiInstance = axios.create({ baseURL: '/api/v1/' });

// Sets given token as Authorization header
const setAuthHeader = token => {
  apiInstance.defaults.headers.common.Authorization = `Token ${token}`;
};

// Set token for the first time only if it is defined
const token = getItem(AUTH_TOKEN);
if (token) {
  setAuthHeader(token);
}

// Post to api-auth endpoint
const login = user => axios.post('/api-auth/', user);

// Get list of orders
const getOrders = (page = 1) => {
  return apiInstance.get(`orders/?limit=10&offset=${(page - 1) * 10}`);
};

// Post new order
const postOrder = order => apiInstance.post('orders/', order);

export { setAuthHeader, login, getOrders, postOrder, AUTH_TOKEN };
