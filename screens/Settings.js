import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// styles
import ui from "../style/Ui";
import grid from "../style/Grid";
import typo from "../style/Typography";
// components
import Header from "../components/Header";

import { AppContext } from "../Provider";

export default class Settings extends React.Component {
  static navigationOptions = {
    header: null
  };

  static contextType = AppContext;

  _signOutAsync = async () => {
    this.context
      .removeToken()
      .then(() => {
        this.props.navigation.navigate("Auth");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <View style={grid.appWrapper}>
        <View style={grid.container}>
          <Header title={"Settings"} />

          <View style={[grid.flex_column, ui.t_60, ui.cockpit]} />

          <View style={[grid.flex_row, grid.flex_abs_center, ui.appFooter]}>
            <TouchableOpacity onPress={this._signOutAsync}>
              <Text style={[typo.action]}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
} // Settings
