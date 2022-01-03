import React from 'react';
import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';
import ButtonPick from '../../Button.js/ButtonPick';
import data from '../../../data.json';
import ButtonSign from '../../Button.js/ButtonSign';

const Pick = ({route}) => {
  const {groupLetter, matchName} = route.params;

  const match = data.groups[groupLetter].matches.find((match, index) => {
    return match.name === matchName;
  });
  const homeTeam = data.teams[groupLetter].find(team => {
    return team.id === match.home_team;
  });
  const awayTeam = data.teams[groupLetter].find(team => {
    return team.id === match.away_team;
  });

  const {width} = useWindowDimensions();
  return (
    <View style={styles.pickScreenContainer}>
      <View style={[styles.pickContainer, {width: width * 0.6}]}>
        <View style={styles.teams}>
          <Text style={styles.text}>
            {homeTeam.emojiString} {homeTeam.fifaCode}
          </Text>
        </View>
        <View style={styles.stateContainer}>
          <ButtonPick text={'-'} />
          <Text style={styles.text}>2</Text>
          <ButtonPick text={'+'} />
        </View>
      </View>
      <View style={[styles.pickContainer, {width: width * 0.6}]}>
        <View style={styles.teams}>
          <Text style={styles.text}>
            {awayTeam.emojiString} {awayTeam.fifaCode}
          </Text>
        </View>
        <View style={styles.stateContainer}>
          <ButtonPick text={'-'} />
          <Text style={styles.text}>0</Text>
          <ButtonPick text={'+'} />
        </View>
      </View>
      <ButtonSign text={'SUBMIT'} />
    </View>
  );
};

const styles = StyleSheet.create({
  pickScreenContainer: {
    backgroundColor: '#6C1933',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickContainer: {
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  stateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  teams: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Pick;
