import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight} from 'react-native';

import Set from '../Set'

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  highlight: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 5
  },
  buttonText: {
    fontSize: 12
  },
});



export default class AddExercise extends Component {
  clickAddExercise() {
    console.log("You tapped the Add Exercise Button!");
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.clickAddExercise}
        underlayColor="white"
        style={styles.highlight}
      >
        <Text style={styles.buttonText}> Add Exercise </Text>
      </TouchableHighlight>
    )
  }
};
