/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './ListItem.styles';

const ListItem = ({props}) => {
  const [count, setCount] = useState(0);
  const [listItem, setListItem] = useState(['A', 'B', 'C']);

  plusCount = () => {
    setCount(count + 1);
  };

  minusCount = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={styles.listItem}>
          {listItem.map((item, index) => {
            return (
              <View
                style={}>
                <Text key={index} style={{color: 'white'}}>
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={plusCount}
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              marginEnd: 20,
            }}>
            <Text>{'+'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={minusCount}
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{'-'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default ListItem;
