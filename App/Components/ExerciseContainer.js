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
    padding: 10,
    flexGrow: 1,
    marginBottom: 25
  }
});

export default class ExerciseContainer extends Component {
  displaySets() {
    debugger;
    if (this.props.sets) {
      return this.props.sets.map((set, i) => {
        return (
          <View key={i}>
            <Set
              value={this.props}
            />
          </View>
        )
      })
    } else {
      return (
        <Set
          value={''}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Exercise
          name={this.props}
        />
        <View>
          {this.displaySets()}
        </View>
        <AddSet
          onPress={this.props.onPress}
        />
      </View>
    )
  }
};
