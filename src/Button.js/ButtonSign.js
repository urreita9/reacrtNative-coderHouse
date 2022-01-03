import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const ButtonSign = ({text, onPress, w}) => {
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[styles.button, {width: w ? w : width * 0.5}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C1933',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {color: 'white', fontSize: 20},
});
export default ButtonSign;
