import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {startChecking} from '../actions/auth';
import Groups from '../pages/groups/Groups';
import Home from '../pages/home/Home';
import NextMatches from '../pages/nextMatches/NextMatches';
import Pick from '../pages/pick/Pick';
import Rools from '../pages/rools/Rools';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
import NewTournament from '../pages/tournaments/NewTournament';
import Tournaments from '../pages/tournaments/Tournaments';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();

  const {checking, uid} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <Text>Wait...</Text>;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6C1933',
        },
        headerTintColor: '#fff',
      }}>
      {uid ? (
        <>
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Groups" component={Groups} />
          <Stack.Screen name="Tournaments" component={Tournaments} />
          <Stack.Screen name="Next Matches" component={NextMatches} />
          <Stack.Screen name="Rools" component={Rools} />
          <Stack.Screen name="Pick" component={Pick} />
          <Stack.Screen name="New Tournament" component={NewTournament} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
