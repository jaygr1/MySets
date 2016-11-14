import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage } from 'react-native';

import Save from './Save'
import Calendar from './Calendar'

var CalendarPicker = require('react-native-calendar-picker'),
    CalendarPicker2;
var styles = StyleSheet.create({
  footer: {
    borderColor: '#444',
    borderWidth: 1,
    backgroundColor: '#b2a5ac',
    height: 30
    // position: 'fixed'
  }
})
export default class FooterContainer extends Component {
  render() {
    return (
      <View var style={styles.footer}>
        <Save onPress={this.props.onPress}/>
      </View>
    )
  }
}
