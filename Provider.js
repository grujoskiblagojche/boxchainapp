import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { setAuthorizationToken, removeAuthorizationToken } from "./axiosConfig";

export const AppContext = React.createContext();

export default class Provider extends Component {
  state = {
    token: null,
    userId: null
  };

  saveToken = async token => {
    try {
      setAuthorizationToken(token);
      this.setState({ token });
      const resp = await AsyncStorage.setItem("userToken", token);
      return resp;
    } catch (error) {
      this.setState({ error });
    }
  };

  removeToken = async () => {
    try {
      removeAuthorizationToken();
      this.setState({ token: null });
      const resp = await AsyncStorage.removeItem("userToken");
      return resp;
    } catch (error) {
      this.setState({ error });
    }
  };

  getToken = async () => {
    try {
      const resp = await AsyncStorage.getItem("userToken");
      return resp;
    } catch (error) {
      this.setState({ error });
    }
  };

  setUserId = userId => {
    this.setState({ userId });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          token: this.state.token,
          userId: this.state.userId,
          saveToken: this.saveToken,
          removeItem: this.removeToken,
          getToken: this.getToken,
          setUserId: this.setUserId
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
