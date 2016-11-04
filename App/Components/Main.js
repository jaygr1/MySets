import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Navigator } from 'react-native';

import ExerciseContainer from './ExerciseContainer'
import AddExercise from './Buttons/AddExercise'
// import api from '../Utils/api'
// import Dashboard from './Dashboard'

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
        // marginTop: 65,
        // flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: '#339FFF',
  }
  // exerciseContainer: {
  //   flex: 1,
  //   borderWidth: 1,
  //   borderColor: '#444'
  // }
  // title: {
  //   marginBottom: 20,
  //   fontSize: 25,
  //   textAlign: 'center',
  //   color: '#fff'
  // },
  // searchInput: {
  //   height: 50,
  //   padding: 4,
  //   marginRight: 5,
  //   fontSize: 23,
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   borderRadius: 8,
  //   color: 'white'
  // },
  // buttonText: {
  //   fontSize: 18,
  //   color: '#111',
  //   alignSelf: 'center'
  // },
  // button: {
  //   height: 45,
  //   flexDirection: 'row',
  //   backgroundColor: 'white',
  //   borderColor: 'white',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   marginBottom: 10,
  //   marginTop: 10,
  //   alignSelf: 'stretch',
  //   justifyContent: 'center'
  // },
});

export default class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ExerciseContainer />
        <AddExercise />
      </View>
    )
  }
};
