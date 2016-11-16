import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

var styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: 'green'
  },
  highlight: {
    // alignSelf: 'flex-end',
    // borderWidth: 1,
    // borderColor: '#444',
    marginRight: 4,
    marginTop: 4,
  },
  saveText: {
    fontSize: 12,
  }
});

export default class Save extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.highlight}
          underlayColor="white"
          onPress={this.props.onSave}
        >
          <Text style={styles.saveText}> Save </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
