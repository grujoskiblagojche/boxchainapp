import React from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';

import Splash from '../screens/Splash';

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(false ? 'Main' : 'Auth');
    // this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      
      // <ActivityIndicator />

      <View>
        <ActivityIndicator />
        <Splash />
      </View>
    );
  }
}