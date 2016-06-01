/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Counter from './src/components/counter/counter';

class ReactNativeCounter extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Counter />
      </View>
    );
  }
}

AppRegistry.registerComponent('react_native_counter', () => ReactNativeCounter);

