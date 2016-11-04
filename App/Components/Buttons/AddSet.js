import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ListView } from 'react-native';

import Set from '../Set'

var styles = StyleSheet.create({
  highlight: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#444',
    marginRight: 4,
    marginTop: 4
  },
  buttonText: {
    fontSize: 12,
  }
});

export default class AddSet extends Component {
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       // dataSource: ds.cloneWithRows(this.props.notes),
//       dataSource: ds.cloneWithRows(''), //switch this later??
//       weight: '',
//       reps: ''
//     }
//   }
  // render() {
  //   return (
  //     <View style={{flex: 1, paddingTop: 22}}>
  //       <ListView
  //         dataSource={this.state.dataSource}
  //         renderRow={(rowData) => <Text>{rowData}</Text>}
  //       />
  //     </View>
  //   );
  // }

  clickAddSet() {
    console.log("You tapped the Add Set Button!");
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.clickAddSet}
        style={styles.highlight}
        underlayColor="white"
      >
        <Text style={styles.buttonText}> Add Set </Text>
      </TouchableHighlight>
    )
  }
};
