import axios from 'axios';
import SetAuthToken from '../../utils/SetAuthToken';

export const registerAuth = async formData => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.post('/api/users', formData, config);
  return res.data;
};
export const loadUserAuth = async () => {
  if (localStorage.token) {
    SetAuthToken(localStorage.token);
  }
  const res = await axios.get('/api/auth');
  return res.data;
};
export const loginAuth = async formData => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.post('/api/auth', formData, config);
  return res.data;
};
