import React, {useEffect, useRef} from 'react';
import {Text, View, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../screens/author_stack/login/Login.styles';
import useDimensions from '../helper/useDimensions';

SlideText.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
};

SlideText.defaultProps = {
  firstText: '',
  secondText: '',
};

function SlideText(props) {

  const {scrWidth} = useDimensions();
  const translateText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateText, {
      toValue: 1,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  console.log('render SlideText');

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: translateText.interpolate({
                inputRange: [0, 1],
                outputRange: [-scrWidth - 10, 0],
              }),
            },
          ],
        }}>
        <Text style={styles.title}>{props.firstText} </Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: translateText.interpolate({
                inputRange: [0, 1],
                outputRange: [scrWidth + 10, 0],
              }),
            },
          ],
        }}>
        <Text style={styles.titleConnect}>{props.secondText}</Text>
      </Animated.View>
    </View>
  );
}

export default SlideText;
