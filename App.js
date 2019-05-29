import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
// Navigation
import AppNavigator from './navigation/AppNavigator';
// Screens
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import FindBox from './screens/FindBox';
import CreateBox from './screens/CreateBox';
import BoxNotFound from './screens/BoxNotFound';
import BannedProfile from './screens/BannedProfile';
import UserProfile from './screens/UserProfile';
import ChatBox from './screens/ChatBox';

import grid from './style/Grid';

export default class App extends React.Component {

  render() {
    return (
      <View style={ grid.app }>
        { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
        <AppNavigator />
      </View>

      // <LogIn />
      // <Register />
      // <ResetPassword />
      // <FindBox />
      // <CreateBox />
      // <BoxNotFound />
      // <BannedProfile />
      // <UserProfile />
      // <ChatBox />
    );
  }
} // App
