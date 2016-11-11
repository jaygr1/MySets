import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage } from 'react-native';

export default class Save extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor="white"
          onPress={this.props.onPress}
        />
      </View>
    )
  }
}
