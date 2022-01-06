import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {fetchWithoutToken, fetchWithToken} from '../helpers/fetch';
import {types} from '../types/types';

export const startLogin = (email, password) => {
  return async dispatch => {
    const res = await fetchWithoutToken('auth', {email, password}, 'POST');
    const body = await res.json();
    console.log(body);
    if (body.ok) {
      // AsyncStorage.setItem('token', body.token);
      // AsyncStorage.setItem(
      //   'token-init-date',
      //   JSON.stringify(new Date().getTime()),
      // );
      const tokenDate = JSON.stringify(new Date().getTime());
      storeData('token', body.token);
      storeData('token-init-date', tokenDate);

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        }),
      );
    } else {
      Alert.alert('Error in Login', 'Wrong email or password', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          options: {
            cancelable: true,
          },
        },
      ]);
    }
  };
};

export const startRegister = (name, email, password) => {
  return async dispatch => {
    const res = await fetchWithoutToken(
      'auth/new',
      {name, email, password},
      'POST',
    );
    const body = await res.json();
    console.log(body);
    if (body.ok) {
      // AsyncStorage.setItem('token', body.token);
      // AsyncStorage.setItem(
      //   'token-init-date',
      //   JSON.stringify(new Date().getTime()),
      // );
      const tokenDate = JSON.stringify(new Date().getTime());
      storeData('token', body.token);
      storeData('token-init-date', tokenDate);

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        }),
      );
      // dispatch(startChecking());
    } else {
      Alert.alert('Sign Up Error', 'Email already exists', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          options: {
            cancelable: true,
          },
        },
      ]);
    }
  };
};

export const startChecking = () => {
  return async dispatch => {
    const res = await fetchWithToken('auth/renew');
    const body = await res.json();
    console.log(body);
    if (body.ok) {
      const tokenDate = JSON.stringify(new Date().getTime());
      // AsyncStorage.setItem('token', body.token);
      storeData('token', body.token);
      storeData('token-init-date', tokenDate);
      // AsyncStorage.setItem(
      //   'token-init-date',
      //   JSON.stringify(new Date().getTime()),
      // );

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        }),
      );
    } else {
      dispatch(checkingFinished());
    }
  };
};

const checkingFinished = () => ({
  type: types.authCheckingFinished,
});

const login = user => ({
  type: types.authLogin,
  payload: user,
});

const storeData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
