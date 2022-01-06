import React from 'react';

import {FlatList, ImageBackground, StyleSheet} from 'react-native';

import SingleGroup from '../singleGroup/SingleGroup';

const groupsLetters = [
  {group: 'a', key: 1},
  {group: 'b', key: 2},
  {group: 'c', key: 3},
  {group: 'd', key: 4},
  {group: 'e', key: 5},
  {group: 'f', key: 6},
  {group: 'g', key: 7},
  {group: 'h', key: 8},
];

const Groups = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <FlatList
        data={groupsLetters}
        refreshing={true}
        renderItem={({item}) => (
          <SingleGroup
            groupLetter={item.group}
            onPress={() => {
              navigation.navigate('Next Matches', {
                groupLetter: item.group,
                navigation,
              });
            }}
          />
        )}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rowGroups: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  image: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Groups;
