import React, {useEffect, useReducer, useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/user_stack/Home/HomeScreen';
import LoginScreen from './src/screens/author_stack/Login/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './src/context';
import TabNavigator from './src/screens/user_stack/Main/TabNavigator';

const RootStack = createStackNavigator();

const Author = createStackNavigator();
const AuthorStack = () => (
  <Author.Navigator headerMode={'none'} initialRouteName="Login">
    <Author.Screen name="Login" component={LoginScreen} />
  </Author.Navigator>
);

const User = createStackNavigator();
const UserStack = () => (
  <User.Navigator initialRouteName="Home">
    <User.Screen name="Home" component={TabNavigator} />
  </User.Navigator>
);

function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await AsyncStorage.getItem('userToken');
      dispatch({type: 'RESTORE_TOKEN', token: accessToken});
    };

    getAccessToken();
  }, []);

  console.log('render App');

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <RootStack.Navigator headerMode={'none'}>
          {state.userToken == null ? (
            <RootStack.Screen name="AuthorStack" component={AuthorStack} />
          ) : (
            <RootStack.Screen name="UserStack" component={UserStack} />
          )}
        </RootStack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export default App;
