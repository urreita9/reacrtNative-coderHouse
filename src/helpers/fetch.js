import {REACT_APP_API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = REACT_APP_API_URL;
const contentType = 'Content-type';
const x_token = 'x-token';

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        [contentType]: 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchWithToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = (await AsyncStorage.getItem('token')) || '';

  console.log(token);
  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        [x_token]: token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        [contentType]: 'application/json',
        [x_token]: token,
      },
      body: JSON.stringify(data),
    });
  }
};

export {fetchWithoutToken, fetchWithToken};
