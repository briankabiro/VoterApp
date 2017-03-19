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

export default class VoterApp extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Main />
      </View>
    );
  }
}



AppRegistry.registerComponent('VoterApp', () => VoterApp);
