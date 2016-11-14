import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage } from 'react-native';

import Save from './Save'

var styles = StyleSheet.create({
  footer: {
    borderColor: '#444'
  }
})
export default class FooterContainer extends Component {
  render() {
    return (
      <View var style={styles.footer}>
        <Save />
      </View>
    )
  }
}
