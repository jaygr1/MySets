import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Navigator,
  ScrollView } from 'react-native';

import ExerciseContainer from './ExerciseContainer'
import AddExercise from './Buttons/AddExercise'

var styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    flexDirection: 'column',
  }
});

export default class Main extends Component {
  state = {
    exercises: [
      {
        name: "",
        sets: [{
          weight: '',
          reps: '',
        }]
      }
    ]
  };

  handleAddExercise() {
    console.log("You tapped the Add Exercise Button main.js!");
    var newExercise = {
      name: "",
      sets: [{
        weight: '',
        reps: '',
      }]
    }
    var newState = this.state.exercises.push(newExercise)
    this.setState({
      newState
    })
  };

  handleAddSet() {
    console.log("You tapped the Add set Button main.js!");
    var newSet = {
      weight: '',
      reps: '',
    }
    var newState = this.state.exercises[0].sets.push(newSet)
    this.setState({
      newState
    })
  };

  sets() {
    return this.state.exercises.map((exercise, i) => {
      return (
        <View key={i}>
          <ExerciseContainer
            onPress={() => this.handleAddSet()}
              name={exercise.name}
              sets={exercise.sets}
              ref={exercise.name}
          />
        </View>
      )
    })
  }

  exercises() {
      return (
        <View>
          <ExerciseContainer
            onPress={() => this.handleAddExercise()}
          />
        </View>
      )
  }

    render() {
      return (
        <View style={styles.mainContainer}>
          <View>
            {this.sets()}
          </View>
            {this.exercises()}
        </View>
      )
    }
};
