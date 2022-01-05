import React from 'react';

import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import data from '../../../data.json';

const SingleGroup = ({groupLetter, onPress}) => {
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[styles.group, {width: width * 0.6}]}
      onPress={onPress}>
      <Text style={styles.title}>Group {groupLetter.toUpperCase()}</Text>
      <FlatList
        data={data.teams[groupLetter]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text style={styles.team}>
            {item.emojiString} {''}
            {item.name}
          </Text>
        )}
      />
      {/* {data.teams[groupLetter].map((team, i) => (
        <Text key={i} style={{color: 'white', padding: 4, fontSize: 18}}>
          {team.emojiString} {''}
          {team.name}
        </Text>
      ))} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#F1AB01',
    fontSize: 20,
    paddingLeft: 5,
    textAlign: 'center',
  },
  group: {
    marginVertical: 10,
    backgroundColor: '#6C1933',
    // width: 150,
    borderRadius: 10,
  },
  team: {color: 'white', padding: 4, fontSize: 18, marginLeft: 10},
  image: {flex: 1, justifyContent: 'flex-end'},
});

export default SingleGroup;
