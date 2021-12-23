/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignIn from './src/pages/signIn/SignIn';
import SignUp from './src/pages/signUp/SignUp';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={require('./src/assets/futbolBackground1.jpg')}
        resizeMode="cover"
        style={styles.image}>
        {/* <SignIn /> */}
        <SignUp />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  image: {flex: 1, justifyContent: 'flex-end'},
});
export default App;
