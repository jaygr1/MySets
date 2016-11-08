import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight } from 'react-native';

import Exercise from './Exercise'
import Set from './Set'
import AddSet from './Buttons/AddSet'

var styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: '#DAF7A6',
  }
});

export default class ExerciseContainer extends Component {
  clickAddSet() {
    console.log("You tapped the Add Set Button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Exercise />
        <Set />
        <AddSet onPress={() => this.clickAddSet()} />
      </View>
    )
  }
};
