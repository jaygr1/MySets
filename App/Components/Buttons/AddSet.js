import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ListView } from 'react-native';

import Set from '../Set'

var styles = StyleSheet.create({
  highlight: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#444',
    marginRight: 4,
    marginTop: 4
  },
  buttonText: {
    fontSize: 12,
  }
});

export default class AddSet extends Component {
  render() {
    debugger;
    return (
      <View>
        <TouchableHighlight
          style={styles.highlight}
          underlayColor="white"
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonText}> Add Set </Text>
        </TouchableHighlight>
      </View>
    )
  }
};
