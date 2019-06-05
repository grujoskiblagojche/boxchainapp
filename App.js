import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
// Navigation
import AppNavigator from './navigation/AppNavigator';
// Styles
import grid from './style/Grid';
import ui from './style/Ui';
// Context Provider
import Provider from './Provider'

export default class App extends React.Component {

  render() {
    return (
      <Provider>
        <View style={[ grid.app, ui.app ]}>
          { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
          <AppNavigator />
        </View>
      </Provider>
    );
  }
} // App
