import React, { useEffect, useCallback, useMemo, useState } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

LoadingIndicator.propTypes = {
  loadingImage: PropTypes.string.isRequired,
  size: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  loadingImage: "../../assets/logo.png",
  size: "large" | "small",
};

export default function LoadingIndicator(props) {
    
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require(props.loadingImage)}
        style={{
          width: props.size === "large" ? 36 : 20,
          height: props.size === "large" ? 36 : 20,
        }}
        resizeMode={"cover"}
      />
    </View>
  );
}
