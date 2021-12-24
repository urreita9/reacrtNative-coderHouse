import React from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <ButtonSign text={'Groups'} />
        <ButtonSign text={'Tournaments'} />
        <ButtonSign text={'Picks'} />
        <ButtonSign text={'Rools'} />
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
