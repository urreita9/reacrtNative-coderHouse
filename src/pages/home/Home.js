import React from 'react';

import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {startLogout} from '../../actions/auth';
import ButtonSign from '../../Button.js/ButtonSign';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <ButtonSign
          text={'🧑‍🤝‍🧑 Groups'}
          onPress={() => {
            navigation.navigate('Groups');
          }}
        />
        <ButtonSign
          text={'🏆 Tournaments'}
          onPress={() => {
            navigation.navigate('Tournaments');
          }}
        />
        <ButtonSign
          text={'⚽ Next Matches'}
          onPress={() => {
            navigation.navigate('Next Matches');
          }}
        />
        <ButtonSign
          text={'📑 Rools'}
          onPress={() => {
            navigation.navigate('Rools');
          }}
        />
        <ButtonSign
          text={'Logout'}
          onPress={() => {
            dispatch(startLogout());
          }}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rowGroups: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  image: {flex: 1, justifyContent: 'center'},
});

export default Home;
