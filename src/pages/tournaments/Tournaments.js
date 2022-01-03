import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';

const Tournaments = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <ButtonSign text={'My Tournaments'} />
        <View style={styles.newJoin}>
          <ButtonSign
            text={'New'}
            w={100}
            onPress={() => {
              navigation.navigate('New Tournament');
            }}
          />
          <ButtonSign text={'Join'} w={100} />
        </View>

        <ButtonSign
          text={'Home'}
          onPress={() => {
            navigation.pop();
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  newJoin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 60,
  },
  image: {flex: 1, justifyContent: 'center'},
});

export default Tournaments;
