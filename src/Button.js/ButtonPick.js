import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonPick = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F1AB01',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  buttonText: {color: 'black', fontSize: 20, fontWeight: '500'},
});
export default ButtonPick;
