/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Main from './app/components/main';
import Home from './app/components/Home';
import Governor from './app/components/governor';

const VoterApp = StackNavigator({
	Home:{screen:Home},
	President:{screen:Main},
  Governor:{screen:Governor}
})

AppRegistry.registerComponent('VoterApp', () => VoterApp);
