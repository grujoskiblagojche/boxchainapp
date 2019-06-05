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
      if (!token) return this.props.navigation.navigate("Auth");

      setAuthorizationToken(token);
      const response = await http.post("/auth/checktoken");
      // if (!response.data) return this.props.navigation.navigate("Auth");
      
      this.props.context.setUser(response.data);
      this.props.context.saveToken(token);

      this.props.navigation.navigate("Main");
    } catch (error) {
      removeAuthorizationToken();
      this.props.navigation.navigate("Auth");
      //da se naprajt nekoj nacin za fakjanje errori
    }
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
