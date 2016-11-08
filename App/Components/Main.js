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
    flexDirection: 'column'
  }
});

export default class Main extends Component {
  state = {
    exercises: [{
      name: "",
      sets: [{
        weight: '',
        reps: '',
      }]
    }]
  }

  handleAddExercise() {
    console.log("You tapped the Add Exercise Button main.js!");
    var newExercise = [{
      name: "",
      sets: [{
        weight: '',
        reps: '',
      }]
    }]
    // this.setState({
    //   // exerciseCount: this.state.exerciseCount++
    // exercises: [...this.state.exercises, ...newExercise]
    // });
  }

  handleAddSet() {
    console.log("You tapped the Add set Button (exercise container)!");
    var newSet = [{
      weight: '',
      reps: '',
    }]
    debugger;
    this.state.exercises[0].sets.concat(newSet)
  }

  exercises() {
    // this.state.exercises.map(exercise => {
      return (
        <ExerciseContainer
          onPress={() => this.handleAddSet()}
          //exercise={exercise.name}
          //sets={exercise.sets}
          // onAddSet={() => this.handleAddSet()}
        />
      // )
    // })
  // };
  )}

  // <AddExercise
  //   onPress={() => this.handleAddExercise }
  // />

    render() {
      return (
        <View style={styles.mainContainer}>
          {this.exercises()}

        </View>
      )
    }
};
