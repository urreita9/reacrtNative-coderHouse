import {Alert} from 'react-native';
import {fetchWithoutToken, fetchWithToken} from '../helpers/fetch';
import {types} from '../types/types';

export const createTournament = name => {
  return async dispatch => {
    const res = await fetchWithToken('tournaments', {name}, 'POST');
    const body = await res.json();
    console.log(body);
    if (body.ok) {
      Alert.alert(
        `Tournament ${body.tournament.name} created`,
        `Share this code with your friends: ${body.tournament.id}`,
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
      );
    }
  };
};
