import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  useWindowDimensions,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {startRegister} from '../../actions/auth';
import ButtonSign from '../../Button.js/ButtonSign';
import {useForm} from '../../hooks/useForm';

const SignUp = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const {form, onChange, reset} = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {name, email, password, password2} = form;

  const handleSignUp = () => {
    if (password !== password2) {
      return Alert.alert(
        'Passwords dont matchup',
        'Please be sure to write a correct password',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            options: {
              cancelable: true,
            },
          },
        ],
      );
    }
    dispatch(startRegister(name, email, password));
  };

  return (
    <View style={styles.signUpContainer}>
      {width < height && (
        <Image
          source={require('../../assets/qatarLogo.png')}
          style={[styles.logo, {width: width * 0.4, height: height * 0.4}]}
        />
      )}

      {/* <Text style={styles.title}>Prode Qatar 2022</Text> */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={value => onChange(value, 'name')}></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={value => onChange(value, 'email')}></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={value => onChange(value, 'password')}></TextInput>
        <TextInput
          placeholder="Repeat Password"
          style={styles.input}
          onChangeText={value => onChange(value, 'password2')}></TextInput>
      </View>

      <ButtonSign text="Sign up" onPress={handleSignUp} />
      <ButtonSign
        text="Already have an account? Sign in"
        onPress={navigation.navigate('Sign In')}
      />
    </View>
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
  signUpContainer: {justifyContent: 'center'},
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    width: '70%',
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
export default SignUp;
