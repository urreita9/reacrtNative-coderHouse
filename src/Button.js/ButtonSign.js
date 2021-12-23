import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonSign = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C1933',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {color: 'white'},
});
export default ButtonSign;
