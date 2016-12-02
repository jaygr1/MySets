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
    try {
      return this.props.sets.map((set, i) => {
        return (
          <View key={i}>
            <Set
              value={this.props}
            />
          </View>
        )
      })
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Exercise
          name={this.props.name}
          onChangeName={this.props.onChangeName}
          value={this.props.name}
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
