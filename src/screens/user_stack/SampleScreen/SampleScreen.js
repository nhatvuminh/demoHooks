import React, { useCallback, useRef } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { AuthContext } from "../../../context/index";
import { logger } from "../../../helper/logger";
import useDimensions from "../../../helper/useDimensions";
import HamburgerButton from "../../../components/HamburgerButton";
import { styles } from "../Home/Home.styles";

export default function SampleScreen() {
  const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated;
  const { signOut } = React.useContext(AuthContext);
  const { scrWidth, scrHeight } = useDimensions();
  const offsetX = useRef(new Value(scrWidth / 2)).current;
  const offsetY = useRef(new Value(scrHeight / 2)).current;
  const gestureState = useRef(new Value(-1)).current;
  const dragX = useRef(new Value(0)).current;
  const dragY = useRef(new Value(0)).current;

  const logOut = useCallback(() => {
    signOut();
  }, [])

  const transX = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetX, dragX),
    set(offsetX, add(offsetX, dragX)),
  );

  const transY = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetY, dragY),
    set(offsetY, add(offsetY, dragY)),
  );

  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: dragX,
        translationY: dragY,
        state: gestureState,
      },
    },
  ]);

console.log('render Home');

  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureEvent}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateX: transX,
                translateY: transY,
              },
            ],
          }}
        >
          <HamburgerButton image={require("../../../assets/menu.png")} />
        </Animated.View>
      </PanGestureHandler>
      {/* <TouchableOpacity style={styles.logoutContainer} onPress={logOut}>
        <Text style={styles.textLogout}>Logout</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
