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
        date: `${moment().format("YYYY-MM-DD")}`,
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

    //surprising this works because newState returns 2 but I'll take it for now
    this.setState({
      newState
    })
  };

  async componentDidMount() {
    var today = moment().format('YYYY/MM/DD');
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
            }]
          }
        ]
      })
    }
  }

  exercises() {
    return this.state.exercises.map((exercise, i) => {
      return (
        <View key={i}>
          <ExerciseContainer
            onPress={() => this.handleAddSet(i)}
              name={exercise.name}
              sets={exercise.sets}
          />
        </View>
      )
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
      title: 'Date Picker'
    });
  }

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
