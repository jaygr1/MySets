import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  NavigatorIOS,
  ScrollView,
  Modal,
  AsyncStorage } from 'react-native';

import ExerciseContainer from './ExerciseContainer'
import AddExercise from './Buttons/AddExercise'
import Save from './Footer/Save'
import FooterContainer from './Footer/FooterContainer'
import Calendar from './Footer/Calendar'

var moment = require('moment');

var styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    flexDirection: 'column',
    flex: 1
  }
});

// this.state.exercises.filter(e => e.date === "2016-01-01");
// could use find instead if only wanted 1st item instead of array

export default class Main extends Component {
  state = {
    exercises: [
      {
        date: new Date(),
        name: "",
        sets: [{
          weight: '',
          reps: '',
        }],
      }
    ],
    selectedDate: new Date()
  };

  handleAddExercise() {
    console.log("You tapped the Add Exercise Button main.js!");
    var newExercise = {
      date: `${this.state.selectedDate}`,
      name: "",
      sets: [{
        weight: '',
        reps: '',
      }]
    }

    var exercises = [
      ...this.state.exercises,
      newExercise
    ];

    this.setState({
      exercises
    })
  };

  handleAddSet(i) {
    console.log("You tapped the Add set Button main.js!");
    var newSet = {
      weight: '',
      reps: '',
    }
    var newState = this.state.exercises[i].sets.push(newSet)

    //REFACTOR TO USE SOMETHING LIKE BELOW RATHER THAN this.state.exercises[i].sets.push(newSet)
    // var set = [
    //   ...this.state.exercises[i].sets,
    //   newSet
    // ]
    //
    // var exercises = [
    //   ...this.state.exercises,
    //   set[0]
    // ]
    // also need to refactor handleChangeName to use proper syntax

    //surprising this works because newState returns 2 but I'll take it for now
    this.setState({
      newState
    })
  };

  async componentDidMount() {
    var today = new Date();
    var savedData = await AsyncStorage.getItem("exercises")
    var savedExercises = JSON.parse(savedData).exercises
    if (savedExercises.length != 0) {
      this.setState({
        exercises: savedExercises
      })
    } else {
      this.setState({
        exercises: [
          {
            date: `${today}`,
            name: "",
            sets: [{
              weight: '',
              reps: '',
            }],
        selectedDate: `${today}`,
          }
        ]
      })
    }
  }

  //need to refactor this i.e.
  // var exercises = [
  //   ...this.state.exercises,
  //   newExercise
  // ];
  handleChangeName(exercise, i) {
    // var newState = this.state.exercises[i].sets.push(newSet)
    // var name = this.state.exercises[i]
    // var currState = this.state
    const newExercise = {
      ...this.state.exercises[i],
      name: exercise
    }
    var currState = this.state.exercises;

    var newState = [
      ...currState.slice(0, i),
      newExercise,
      ...currState.slice(i+1, currState.length - 1)
    ];

    // console.log(newState)
    this.setState({
      exercises: newState
    })
    console.log(exercise, i, newState)
  }

  exercises() {
    // var viewDate = Calendar.selectedDate()
    //come back
    return this.state.exercises.map((exercise, i) => {
      // console.log(exercise.date.setHours(0,0,0,0))
      // var a = exercise.date
      // a.setHours(0,0,0,0)
      // var b = this.state.selectedDate
      // b.setHours(0,0,0,0)
      if (exercise.date.toString().slice(0,15) == this.state.selectedDate.toString().slice(0,15)) {
      // if (date == selectedDate) {
        return (
          <View key={i}>
            <ExerciseContainer
              onChangeName={(exercise) => this.handleChangeName(exercise, i)}
              onPress={() => this.handleAddSet(i)}
                name={exercise.name}
                sets={exercise.sets}
            />
          </View>
        )
      }
    })
  }

  exercisesButton() {
    return (
      <View>
        <AddExercise
          onPress={() => this.handleAddExercise()}
        />
      </View>
    )
  }

  async handleSave() {
    console.log('you pressed save')
    try {
      await AsyncStorage.setItem('exercises', JSON.stringify(this.state));
      const value = await AsyncStorage.getItem("exercises");
      console.log(value)
    } catch (error) {

    }
  }

  handleCalendar() {
    this.props.navigator.push({
      component: Calendar,
      title: 'Date Picker',
      passProps: {onDateChange: this.handleDateChange, selectedDate: this.state.selectedDate}
    });
  }

  handleDateChange = (date) => {
    this.setState({selectedDate: date});
  };

    render() {
      return (
        <View style={styles.mainContainer}>
          <ScrollView>
            <View>
              {this.exercises()}
            </View>
              {this.exercisesButton()}
          </ScrollView>
          <FooterContainer
            clickCal={() => this.handleCalendar()}
            onSave={() => this.handleSave()}
          />
        </View>
      )
    }
};
