import React, {useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SlideText from '../../../components/SlideText';
import useDimensions from '../../../helper/useDimensions';
import {styles} from './Login.styles';
import { AuthContext } from '../../../context/index';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {scrHeight} = useDimensions();
  const bounceImage = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const {signIn} = React.useContext(AuthContext);

  useEffect(() => {
    Animated.timing(bounceImage, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, []);

  const moveUpInput = () => {
    Animated.spring(translateY, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const moveDownInput = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const onLogin = async () => {
    signIn({username, password});
  };

  console.log('render Login');

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.comboInput,
              {
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, Platform.OS === 'ios' ? -100: 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            <Animated.View
              style={{
                alignSelf: 'center',
                transform: [
                  {
                    translateY: bounceImage.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-scrHeight, 0],
                    }),
                  },
                ],
              }}>
              <Image
                source={require('../../../assets/logo.png')}
                resizeMode={'cover'}
              />
            </Animated.View>
            <SlideText firstText={'Social'} secondText={'Connect'} />
            <TextInput
              onFocus={moveUpInput}
              onBlur={moveDownInput}
              keyboardType={'email-address'}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.inputEmail}
            />
            <TextInput
              onFocus={moveUpInput}
              onBlur={moveDownInput}
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.inputPassword}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnLogin}
              onPress={onLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
