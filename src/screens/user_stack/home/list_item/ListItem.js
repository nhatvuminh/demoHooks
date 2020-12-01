import React, { useCallback } from "react";
import { SafeAreaView, VirtualizedList, View, Image } from "react-native";
import Animated from "react-native-reanimated";
import AnimatedImage from "../../../../components/AnimatedImage";
import useDimensions from "../../../../helper/useDimensions";

function ListItem({ data }) {
  const { scrWidth, scrHeight } = useDimensions();
  const onScrollItem = useCallback((e) => {
    const {
      nativeEvent: {
        contentOffset: { x, y },
      },
    } = e;
    console.log("xxxx", JSON.stringify(x));
  }, []);

  const renderItem = ({ item: { avatar, imageURL }, index }) => {
    if (index == 0) {
      return (
        <Animated.View
          style={{
            borderRadius: 10,
            height: 170,
            width: scrWidth / 3.5,
            alignItems: "center",
            justifyContent: "center",
            transform: [
              // {translateX: }
              // {translateY: }
            ],
          }}
        >
          <AnimatedImage
            source={avatar}
            resizeMode={"cover"}
            style={{
              width: "90%",
              height: "90%",
              borderRadius: 10,
            }}
          />
        </Animated.View>
      );
    }
    return (
      <View
        style={{
          borderRadius: 10,
          height: 170,
          width: scrWidth / 3.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            borderWidth: 2,
            borderColor: "blue",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 15,
            left: 15,
            zIndex: 1,
          }}
        >
          <AnimatedImage
            source={avatar}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
            }}
          />
        </View>

        <AnimatedImage
          source={imageURL}
          resizeMode={"cover"}
          style={{
            width: "90%",
            height: "90%",
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  console.log("render ListItem");

  return (
    <VirtualizedList
      data={data}
      horizontal
      initialNumToRender={5}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
      onScrollToIndexFailed={() => {}}
      initialScrollIndex={0}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      onScroll={onScrollItem}
    />
  );
}

export default React.memo(ListItem);
