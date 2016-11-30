import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput } from 'react-native';

var styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    minHeight: 30,
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
  render() {
    console.log("we're in the exercise component")
    return (
      <TextInput
        style={styles.searchInput}
        placeholder="'bench press'"
        onChangeText={this.props.onChangeName}
        name={this.props.name}
      />
    )
  }
};
