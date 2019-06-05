import React from "react";
import { View, FlatList } from "react-native";
import { http } from "../axiosConfig";
// styles
import ui from "../style/Ui";
import grid from "../style/Grid";
import colors from "../style/Color";
import typo from "../style/Typography";
// components
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";

export default class ChatBox extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    message: "",
    chat: [],
    key: ""
  }; // state

  componentDidMount() {
    const key = this.props.navigation.getParam("key");
    this.setState({ key });
  }

  updateInputState = value => {
    this.setState({
      message: value
    });
  };

  sendMessage = () => {
    if (this.state.message.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        message: "",
        chat: prevState.chat.concat({
          key: Math.random(),
          message: prevState.message
        })
      };
    });
  };

  burnBox = () => {
    http
      .delete("/box/" + this.state.key)
      .then(response => {
        this.props.navigation.navigate("FindBox");
      })
      .catch(error => {
        //da se fatit erroro nekako potaka
      });
  };

  render() {
    return (
      <View style={[ grid.appWrapper, colors.bg_darkest ]}>
        <View style={grid.container_full}>
          <Header title={"Chat Box"} chatbox={true} burnBox={this.burnBox} />

          <View style={[grid.flex_column, ui.t_15]}>
            <FlatList
              contentContainerStyle={[
                grid.flex_column,
                grid.flex_row_end,
                ui.chatContainer
              ]}
              data={this.state.chat}
              renderItem={info => <Message message={info.item} />}
            />
          </View>

          <View
            style={[
              grid.flex_row,
              grid.flex_row_v_center,
              grid.spaceBetween,
              ui.appWrite
            ]} >
            <Input
              inChat={true}
              value={this.state.message}
              onChangeText={value => this.updateInputState(value)}
              placeholder={"Write your message.."}
              valid={this.state.message} />
            <Button
              onPressHandler={this.sendMessage}
              iconName={"arrow-right"}
              iconColor={"#ffffff"} />
          </View>

        </View>
      </View>
    );
  }
} // ChatBox
