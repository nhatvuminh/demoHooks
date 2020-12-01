import React, { useCallback, useRef } from "react";
import { Animated } from "react-native";

export default function AnimatedImage(props) {
  const opacity = useRef(new Animated.Value(0)).current;

  const _onLoadEnd = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);
  
  return (
    <Animated.Image
      {...props}
      source={{uri: props.source}}
      style={[props.style, { opacity: opacity }]}
      onLoadEnd={_onLoadEnd}
    />
  );
}
