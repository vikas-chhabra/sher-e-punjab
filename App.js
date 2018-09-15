import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './views/mainScreen/MainScreen';

export default class App extends Component{
  render() {
    return (
      <MainScreen/>
    );
  }
}


