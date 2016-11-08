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
    margin: 10
  }
});

export default class ExerciseContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Exercise />
        <Set />
        <AddSet
          onPress={this.props.onPress}
        />
      </View>
    )
  }
};
