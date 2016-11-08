/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './App/Components/Main';

var styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#339FFF'
  },
});

export default class MySets extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'MySets',
          component: Main,
        }}
        renderScene={(route, navigator) =>
          <Main title={route.title} navigator={navigator} />
        }
      />
    );
  }
}

AppRegistry.registerComponent('MySets', () => MySets);
