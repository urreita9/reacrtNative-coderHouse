import React from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import data from '../../../data.json';

const SingleGroup = ({groupLetter}) => {
  return (
    <View style={styles.stadiums}>
      <Text style={{color: '#F1AB01', fontSize: 20, paddingLeft: 5}}>
        Group {groupLetter}
      </Text>
      {data.teams[groupLetter].map((team, i) => (
        <Text key={i} style={{color: 'white', padding: 5}}>
          {team.emojiString} {''}
          {team.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rowGroups: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  stadiums: {
    marginVertical: 10,
    backgroundColor: '#6C1933',
    width: 150,
    borderRadius: 10,
  },
  image: {flex: 1, justifyContent: 'flex-end'},
});

export default SingleGroup;
