import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView} from 'react-native';

var styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
  },
  highlight: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 12,

  }
});



export default class AddExercise extends Component {
  render() {
    console.log("we're in the add exercise component")
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.onPress}
          underlayColor="white"
          style={styles.highlight}
        >
          <Text style={styles.buttonText}> Add Exercise </Text>
        </TouchableHighlight>
      </View>
    )
  }
};
