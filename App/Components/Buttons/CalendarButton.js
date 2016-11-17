import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  highlight: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  image: {
    justifyContent: 'flex-start',
    width: 20,
    height: 29,
  }
})

export default class CalendarButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.highlight}
          onPress={this.props.clickCal}
        >
          <Image
            style={styles.image}
            source={require('../../Images/calendar.jpg')}
          />
        </TouchableHighlight>
      </View>
    )
  }
};
