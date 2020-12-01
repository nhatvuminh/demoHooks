import React, { useEffect, useCallback, useMemo, useState } from "react";
import { Image, View } from "react-native";
import PropTypes from "prop-types";

HamburgerButton.propTypes = {
  image: PropTypes.node.isRequired,
};

HamburgerButton.defaultProps = {
  image: require("../../assets/menu.png"),
};

export default function HamburgerButton(props) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={props.image}
        style={{ width: 20, height: 20 }}
        resizeMode={"cover"}
      />
    </View>
  );
}
