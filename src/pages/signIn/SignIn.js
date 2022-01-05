import React, {useState} from 'react';

import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = text => {
    setEmail(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };
  return (
    <>
      <Image
        source={require('../../assets/qatarLogo.png')}
        style={styles.logo}
      />
      {/* <Text style={styles.title}>Prode Qatar 2022</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={text => handleEmail(text)}
          defaultValue={email}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="Password"
          onChangeText={text => handlePassword(text)}
          defaultValue={password}
          style={styles.input}></TextInput>
      </View>

      <ButtonSign text="Sign in" onPress={() => console.log(email, password)} />
      <ButtonSign text="Dont have an account? Sign up" />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    // marginTop: 10,
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
