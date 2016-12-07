/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';
import {AnimatedListView} from './../src';


export default class AnimatedListViewScreen extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8',
                                    'row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8',
                                    'row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8',
                                    'row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8',
                                    'row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8']),
      animatedListView: null
    };
  }

  renderRow(rowID) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: getRandomColor(), padding: 50, margin: 10, marginBottom: 0}}>
        <Text >{`row ${rowID}`}</Text>
      </View>
    )
  }



  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor: '#2c3e50', alignItems: 'center', margin: 10, marginHorizontal: 70, padding: 20, borderRadius: 30}}
          onPress={() => this.state.animatedListView.performAnimation()}
        >
          <Text style={{color: 'white'}}>Load List</Text>
        </TouchableOpacity>

        <AnimatedListView
          ref={component => this.state.animatedListView = component}
          style={{backgroundColor: '#95a5a6'}}
          dataSource={this.state.dataSource}
          renderRow={(rowID) => this.renderRow(rowID)}
          initialListSize={20}
          animationOption={{duration: 2000, initialOpacity: .2, offsetY: 100}}
        />
      </View>
    );
  }
}

function getRandomColor() {
  //return '#FFC952';
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

