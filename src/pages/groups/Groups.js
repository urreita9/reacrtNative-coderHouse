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

const Groups = () => {
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolBackground.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView>
        <View style={styles.rowGroups}>
          <SingleGroup groupLetter={'A'} />

          <SingleGroup groupLetter={'B'} />
        </View>
        <View style={styles.rowGroups}>
          <SingleGroup groupLetter={'C'} />

          <SingleGroup groupLetter={'D'} />
        </View>
        <View style={styles.rowGroups}>
          <SingleGroup groupLetter={'F'} />

          <SingleGroup groupLetter={'G'} />
        </View>
        <View style={styles.rowGroups}>
          <SingleGroup groupLetter={'H'} />

          <SingleGroup groupLetter={'I'} />
        </View>
        <ButtonSign text={'Next Matches'} />
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
