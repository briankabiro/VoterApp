/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Main from './app/components/main';
import Home from './app/components/Home';
import Governor from './app/components/governor';

export default class VoterApp extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Governor />
      </View>
    );
  }
}



AppRegistry.registerComponent('VoterApp', () => VoterApp);
