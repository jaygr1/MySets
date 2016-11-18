import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  DatePickerIOS } from 'react-native';

import CalendarButton from '../Buttons/CalendarButton';

var styles = StyleSheet.create({
  // container: {
  //   marginTop: 22,
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  spacer: {
    marginTop: 50,
    minHeight: 50
  }
})

export default class Calendar extends Component {
  static defaultProps = {
   date: new Date()
 };

 state = {
    date: this.props.date
  }

  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible});
  // }

 onDateChange = (date) => {
    this.props.onDateChange(date)
  };

  // selectedDate() {
  //   return (
  //     this.state.date
  //   )
  // }

  render() {
    return (
      <View>
        <View style={styles.spacer}>
        </View>
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this.onDateChange}
        />
      </View>
    )
  }
};

// export default class Calendar extends Component {
//   static defaultProps = {
//    date: new Date()
//  };
//
//  state = {
//     modalVisible: false,
//     date: this.props.date
//   }
//
//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }
//
//  onDateChange = (date) => {
//     this.setState({date: date});
//   };
//
//   render() {
//     console.log('calendar icon calendar.js')
//     return (
//       <View stle={styles.container}>
//         <Modal
//            animationType={"slide"}
//            transparent={false}
//            visible={this.state.modalVisible}
//            onRequestClose={() => {alert("Modal has been closed.")}}
//          >
//           <TouchableHighlight
//             onPress={() => {this.setModalVisible(true)}}
//           >
//             <DatePickerIOS
//                 date={this.state.date}
//                 mode="date"
//                 onDateChange={this.onDateChange}
//               />
//           </TouchableHighlight>
//         </Modal>
//       </View>
//     )
//   }
// };
