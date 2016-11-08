import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  highlight: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 12
  }
});



export default class AddExercise extends Component {
  render() {
    console.log("we're in the add exercise component")
    return (
      <TouchableHighlight
        onPress={() => this.props.handleAddExercise}
        underlayColor="white"
        style={styles.highlight}
      >
        <Text style={styles.buttonText}> Add Exercise </Text>
      </TouchableHighlight>
    )
  }
};
