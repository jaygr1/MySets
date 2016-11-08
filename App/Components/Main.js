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
    padding: 30
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
    console.log("You tapped the Add Exercise Button!");
    var newExercise = [{
      name: "",
      sets: [{
        weight: '',
        reps: '',
      }]
    }]
    // this.setState({
    //   // exerciseCount: this.state.exerciseCount++
    exercises: [...this.state.exercises, ...newExercise]
    // });
  }

  exercises() {
    // this.state.exercises.map(exercise => {
      return (
        <ExerciseContainer
          //exercise={exercise.name}
          //sets={exercise.sets}
          //onAddSet={}
        />
      // )
    // })
  // };
  )}


    //   return (
    //     <View style={styles.mainContainer}>
    //       <ScrollView>
    //         <ExerciseContainer />
    //       </ScrollView>
    //         <AddExercise onPress={() => this.handleAddExercise()} />
    //     </View>
    //   )
    // }
    render() {
      debugger;
      return (
        <View>
          {this.exercises()}
          <AddExercise
            onPress={() => this.handleAddExercise }
          />
        </View>
      )
    }

  // render() {
  //   return (
  //     <View style={styles.mainContainer}>
  //       <ExerciseContainer />
  //       <AddExercise />
  //     </View>
  //   )
  // }
};
