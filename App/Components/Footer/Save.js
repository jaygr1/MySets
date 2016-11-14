import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

var styles = StyleSheet.create({
  highlight: {
    // alignSelf: 'flex-end',
    // borderWidth: 1,
    // borderColor: '#444',
    marginRight: 4,
    marginTop: 4
  },
  saveText: {
    fontSize: 12,
    alignSelf: 'center',
  }
});

export default class Save extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.highlight}
          underlayColor="white"
          onPress={this.props.onPress}
        >
          <Text style={styles.saveText}> Save </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
