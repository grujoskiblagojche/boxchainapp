import React from "react";
import { View, Text } from "react-native";
// styles
import ui from "../style/Ui";
import grid from "../style/Grid";
import typo from "../style/Typography";
// components
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Key from "../components/Key";

import sha256 from "sha256";
import { http } from "../axiosConfig";

export default class FindBox extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    key: "",
    keys: []
  }; // state

  updateInputState = value => {
    this.setState({
      key: value
    });
  };

  findBox = () => {
    const secret = this.state.keys.reduce((combined, key) => combined + key);
    const key = sha256.x2(secret);

    http
      .post("/box/find", { key })
      .then(response => {
        this.props.navigation.navigate({
          routeName: "ChatBox",
          params: { key: response.data.key }
        });
      })
      .catch(error => {
        // this.setState({ key: error.message });
      });
  };

  addKey = () => {
    if (this.state.key.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        key: "",
        keys: prevState.keys.concat(prevState.key)
      };
    });
  };

  removeKey = index => {
    this.setState(prevState => {
      return {
        keys: prevState.keys.filter((key, i) => {
          return i !== index;
        })
      };
    });
  };

  render() {
    const keysOutput = this.state.keys.map((key, index) => (
      <Key secret={key} key={index} onKeyDelete={() => this.removeKey(index)} />
    ));

    return (
      <View style={grid.appWrapper}>
        <View style={grid.container}>
          <Header title={"Find Box"} />

          <View style={[grid.flex_column, ui.t_60, ui.cockpit]}>
            <Text style={[typo.info, ui.b_15]}>
              Make sure you use correct keys
            </Text>
            <Input
              value={this.state.key}
              onChangeText={value => this.updateInputState(value)}
              maxLength={12}
              placeholder={"key"}
            />
            <View style={[grid.flex_row, grid.flex_row_end]}>
              {this.state.keys.length > 2 ? (
                <Button
                  onPressHandler={this.findBox}
                  valid={true}
                  iconName={"check"}
                  iconColor={"#ffffff"}
                />
              ) : null}

              {this.state.keys.length < 6 ? (
                <Button
                  onPressHandler={this.addKey}
                  iconName={"arrow-right"}
                  iconColor={"#ffffff"}
                />
              ) : null}
            </View>
          </View>

          <View style={[grid.flex_column, ui.t_15]}>{keysOutput}</View>
        </View>
      </View>
    );
  }
} // FindBox
