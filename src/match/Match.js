import React from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import data from '../../data.json';
import ButtonSign from '../Button.js/ButtonSign';

const Match = ({groupLetter, navigation}) => {
  console.log(navigation);
  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.matchContainer}>
        <Text style={styles.matchColor}>Group {groupLetter.toUpperCase()}</Text>
        {data.groups[groupLetter].matches.map((match, index) => {
          return (
            <View key={index} style={[styles.match, {width: width * 0.8}]}>
              <Text style={styles.matchColor}>
                {data.teams[groupLetter].map(team => {
                  if (team.id === match.home_team) {
                    return match.finished
                      ? `${team.emojiString} ${team.fifaCode} ${match.home_result}`
                      : `${team.emojiString} ${team.fifaCode}`;
                  }
                })}
              </Text>
              <Text style={[styles.matchColor, {marginHorizontal: 10}]}>-</Text>
              <Text style={styles.matchColor}>
                {data.teams[groupLetter].map(team => {
                  if (team.id === match.away_team) {
                    return match.finished
                      ? `${team.emojiString} ${team.fifaCode} ${match.away_result}`
                      : `${team.emojiString} ${team.fifaCode}`;
                  }
                })}
              </Text>
              {match.finished ? (
                <Text style={styles.finished}>FINISHED</Text>
              ) : (
                <ButtonSign
                  text={'PICK'}
                  w={80}
                  onPress={() => {
                    navigation.navigate('Pick', {
                      matchName: match.name,
                      groupLetter: groupLetter,
                    });
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  matchContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  match: {
    backgroundColor: '#6C1933',
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  matchColor: {
    color: 'white',
    fontSize: 25,
  },
  finished: {
    color: 'yellow',
    fontSize: 15,
    paddingLeft: 10,
  },
});

export default Match;
