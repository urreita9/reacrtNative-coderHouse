import React from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';

import SingleGroup from '../singleGroup/SingleGroup';

const Groups = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView>
        <View style={styles.rowGroups}>
          <SingleGroup
            groupLetter={'a'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'a',
                navigation,
              });
            }}
          />

          <SingleGroup
            groupLetter={'b'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'b',
                navigation,
              });
            }}
          />
        </View>
        <View style={styles.rowGroups}>
          <SingleGroup
            groupLetter={'c'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'c',
                navigation,
              });
            }}
          />

          <SingleGroup
            groupLetter={'d'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'd',
                navigation,
              });
            }}
          />
        </View>
        <View style={styles.rowGroups}>
          <SingleGroup
            groupLetter={'e'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'e',
                navigation,
              });
            }}
          />

          <SingleGroup
            groupLetter={'f'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'f',
                navigation,
              });
            }}
          />
        </View>
        <View style={styles.rowGroups}>
          <SingleGroup
            groupLetter={'g'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'g',
                navigation,
              });
            }}
          />

          <SingleGroup
            groupLetter={'h'}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: 'h',
                navigation,
              });
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rowGroups: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  image: {flex: 1},
});

export default Groups;
