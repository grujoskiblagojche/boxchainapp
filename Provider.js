import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { setAuthorizationToken, removeAuthorizationToken } from "./axiosConfig";

export const AppContext = React.createContext();

export default class Provider extends Component {
  state = {
    token: null,
    userId: null,
    username: "Anonymous",
    avatar: "https://i0.wp.com/www.calvary.edu/wp-content/uploads/2016/08/person-placeholder.jpg?ssl=1"
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

  setUser = user => {
    if (user.avatar) this.setState({ avatar: user.avatar })
    if (user.userId) this.setState({ userId: user.userId })
    
    this.setState({ username: user.username });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          token: this.state.token,
          userId: this.state.userId,
          username: this.state.username,
          avatar: this.state.avatar,
          saveToken: this.saveToken,
          removeToken: this.removeToken,
          getToken: this.getToken,
          setUser: this.setUser
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
