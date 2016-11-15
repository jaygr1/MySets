import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage } from 'react-native';

import Save from './Save'
import CalendarButton from '../Buttons/CalendarButton'
import Calendar from './Calendar'

var styles = StyleSheet.create({
  footer: {
    borderColor: '#444',
    borderWidth: 1,
    backgroundColor: '#b2a5ac',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // position: 'fixed'
  },
  save: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  calendar: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  }
})
export default class FooterContainer extends Component {
  render() {
    return (
      <View var style={styles.footer}>
        <CalendarButton style={styles.calendar}/>
        <Save style={styles.save} onPress={this.props.onPress}/>
        <Text> placeholder </Text>
      </View>
    )
  }
}
