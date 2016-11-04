import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput } from 'react-native';

var styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    maxHeight: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    alignSelf: 'flex-start',
    width: 250,
    marginTop: 4,
    marginLeft: 4
  },
});

export default class Exercise extends Component {
  state = {
    exercise: ''
  }

  render() {
    return (
      <TextInput
        style={styles.searchInput}
        placeholder="'bench press'"
        onChangeText={(exercise) => this.setState({exercise})}
      />
    )
  }
};
