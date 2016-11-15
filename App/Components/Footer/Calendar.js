import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  DatePickerIOS } from 'react-native';

var styles = StyleSheet.create({
  container: {

  }
})

export default class Calendar extends Component {
  static defaultProps = {
   date: new Date()
 };

 state = {
   date: this.props.date
 };

 onDateChange = (date) => {
    this.setState({date: date});
  };

  render() {
    return (
      <View stle={styles.container}>
        <TouchableHighlight>
          <DatePickerIOS
              date={this.state.date}
              mode="date"
              onDateChange={this.onDateChange}
            />
        </TouchableHighlight>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../Images/calendar.jpg')}
        />
      </View>
    )
  }
};
