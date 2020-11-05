import {
  createStackNavigator,
  createSwitchNavigator,
} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';

import AuthorScreen from '../author/AuthorScreen';
import Login from '../un_author/login/Login';

const unAuthorScreens = {
  Login: {
    screen: Login,
    key: Login,
  },
  AuthorScreen: {
    screen: AuthorScreen,
  },
};

const authorScreens = {
  Login: {
    screen: Login,
    key: Login,
  },
  AuthorScreen: {
    screen: AuthorScreen,
  },
};

const UnAuthorStackNavigator = createStackNavigator(unAuthorScreens);
const AuthorStackNavigator = createStackNavigator(authorScreens);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    UnAuthor: UnAuthorStackNavigator,
    Author: AuthorStackNavigator,
  }),
);
