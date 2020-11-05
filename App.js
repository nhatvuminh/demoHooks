import React, {useEffect, useReducer, useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/user_stack/home/HomeScreen';
import LoginScreen from './src/screens/author_stack/login/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext();

const RootStack = createStackNavigator();
const Author = createStackNavigator();
const AuthorStack = () => (
  <Author.Navigator headerMode={'none'} initialRouteName="Login">
    <Author.Screen name="Login" component={LoginScreen} />
  </Author.Navigator>
);
const User = createStackNavigator();
const UserStack = () => (
  <User.Navigator headerMode={'none'} initialRouteName="Home">
    <User.Screen name="Home" component={HomeScreen} />
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
            isLoading: false,
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
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        // ========================================
        // CALL API SIGN IN

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  useEffect(() => {
    console.log('getAccessToken');
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
