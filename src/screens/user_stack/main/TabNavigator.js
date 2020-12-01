import React, { useEffect, useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import SampleScreen from "../SampleScreen/SampleScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="Sample1" component={SampleScreen} />
      <Tab.Screen name="Sample2" component={HomeScreen} />
      <Tab.Screen name="Sample3" component={HomeScreen} />
      <Tab.Screen name="Sample4" component={HomeScreen} />
    </Tab.Navigator>
  );
}
