import React from 'react';
import {ImageBackground, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {createTournament} from '../../actions/tournament';
import ButtonSign from '../../Button.js/ButtonSign';
import {useForm} from '../../hooks/useForm';

const NewTournament = ({navigation}) => {
  const dispatch = useDispatch();

  const {form, onChange, reset} = useForm({
    name: '',
  });

  const {name} = form;

  const handleNewTournament = () => {
    dispatch(createTournament(name));
    reset();
  };
  return (
    <ImageBackground
      source={require('../../../src/assets/futbolPitch.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Tournament Name"
            style={styles.input}
            defaultValue={name}
            onChangeText={value => onChange(value, 'name')}></TextInput>
        </View>

        <ButtonSign text={'Create'} w={100} onPress={handleNewTournament} />
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
