import React from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';

const Home = ({navigation}) => {
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
