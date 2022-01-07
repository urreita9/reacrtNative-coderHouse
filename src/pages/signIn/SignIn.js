import React from 'react';

import {StyleSheet, View, TextInput, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {startLogin} from '../../actions/auth';
import ButtonSign from '../../Button.js/ButtonSign';
import {useForm} from '../../hooks/useForm';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();

  const {form, onChange, reset} = useForm({
    email: '',
    password: '',
  });

  const {email, password} = form;

  const handleLogin = () => {
    dispatch(startLogin(email, password));
    reset();
  };

  return (
    <>
      <Image
        source={require('../../assets/qatarLogo.png')}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={value => onChange(value, 'email')}
          defaultValue={email}
          style={styles.input}></TextInput>

        <TextInput
          placeholder="Password"
          onChangeText={value => onChange(value, 'password')}
          defaultValue={password}
          style={styles.input}></TextInput>
      </View>

      <ButtonSign text="Sign in" onPress={handleLogin} />
      <ButtonSign
        text="Dont have an account? Sign up"
        onPress={() => navigation.navigate('Sign Up')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
  },
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
  logo: {
    width: 400,
    height: 400,
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
  },
});
export default SignIn;
