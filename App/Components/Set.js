import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 250,
    maxHeight: 36,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 3,
    padding: 2,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  searchInput: {
    flex: 1,
    height: 30,
    width: 100,
    padding: 4,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    maxHeight: 30,
    maxWidth: 120,
  },
});

export default class Set extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="'weight'"
          onChangeText={(weight) => this.setState({weight})}

        />
        <TextInput
          style={styles.searchInput}
          placeholder="'reps'"
          onChangeText={(reps) => this.setState({reps})}

        />
      </View>
    )
  }
};
