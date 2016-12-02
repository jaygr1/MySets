import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 3,
    marginRight: 3,
    padding: 2,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  searchInput: {
    // flex: 1,
    height: 30,
    flex: 1,
    padding: 4,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    maxHeight: 30,
    maxWidth: 140,
  },
});

export default class Set extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="'weight'"
          onChangeText={this.props.onInputWeight}
          weight={this.props.value.sets.weight}
          value={this.props.value.sets.weight}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="'reps'"
          onChangeText={this.props.onInputReps}
          reps={this.props.value.sets.reps}
          value={this.props.value.sets.reps}
        />
      </View>
    )
  }
};
