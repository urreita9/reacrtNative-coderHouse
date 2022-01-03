import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  useWindowDimensions,
} from 'react-native';
import ButtonSign from '../../Button.js/ButtonSign';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = useWindowDimensions();

  const handleEmail = () => {
    console.log('setEmail');
  };
  const handlePassword = () => {
    console.log('setPassword');
  };

  return (
    <>
      {width < height && (
        <Image
          source={require('../../assets/qatarLogo.png')}
          style={[styles.logo, {width: width * 0.6, height: height * 0.6}]}
        />
      )}

      {/* <Text style={styles.title}>Prode Qatar 2022</Text> */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <TextInput placeholder="Password" style={styles.input}></TextInput>
        <TextInput
          placeholder="Repeat Password"
          style={styles.input}></TextInput>
      </View>

      <ButtonSign text="Sign up" />
      <ButtonSign text="Already have an account? Sign in" />
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
  },
  logo: {
    // width: 400,
    // height: 400,

    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
export default SignUp;
