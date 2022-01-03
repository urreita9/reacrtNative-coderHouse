import React from 'react';
import {StyleSheet, View} from 'react-native';
import Match from '../../match/Match';

const NextMatches = ({route}) => {
  const {groupLetter, navigation} = route.params;
  return (
    <View style={styles.nextMatchesContainer}>
      <Match groupLetter={groupLetter} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  nextMatchesContainer: {
    backgroundColor: '#6C1933',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NextMatches;
