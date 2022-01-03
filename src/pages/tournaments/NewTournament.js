import React from 'react';
import {ImageBackground, StyleSheet, TextInput, View} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';

const NewTournament = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Tournament Name"
            style={styles.input}></TextInput>
        </View>

        <ButtonSign text={'Create'} w={100} />

        {/* <ButtonSign
          text={'Home'}
          onPress={() => {
            navigation.pop();
          }}
        /> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  inputContainer: {justifyContent: 'center', alignItems: 'center'},
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    width: '70%',
    fontSize: 18,
  },

  image: {flex: 1, justifyContent: 'center'},
});

export default NewTournament;
