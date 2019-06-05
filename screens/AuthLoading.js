import React from "react";
import { ActivityIndicator, View, StatusBar } from "react-native";
import { AppContext } from "../Provider";
import {
  http,
  setAuthorizationToken,
  removeAuthorizationToken
} from "../axiosConfig";

import Splash from "../screens/Splash";

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
      const token = await this.props.context.getToken();
      if (!token) return;

      setAuthorizationToken(token);
      const user = http.post("/auth/checktoken");

      this.props.setUser(user);
      await this.props.context.saveToken(userToken);

      this.props.navigation.navigate(user ? "Main" : "Auth");
    } catch (error) {
      removeAuthorizationToken();
      //da se naprajt nekoj nacin za fakjanje errori
    }

    this.props.context.getToken().then(userToken => {
      http.post("/auth/checktoken");
      this.props.context.saveToken(userToken);
      this.props.navigation.navigate(userToken ? "Main" : "Auth");
    });
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <AppContext.Consumer>
          {context => (
            <View>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
              <Splash />
            </View>
          )}
        </AppContext.Consumer>
      </View>
    );
  }
}

const ForwardRef = React.forwardRef((props, ref) => (
  <AppContext.Consumer>
    {context => <AuthLoading context={context} {...props} />}
  </AppContext.Consumer>
));

export default ({ navigation }) => (
  <View>
    <ForwardRef navigation={navigation} />
  </View>
);
