import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AppIcon from "../components/AppIcon";

import FindBox from "../screens/FindBox";
import ChatBox from "../screens/ChatBox";
import BoxNotFound from "../screens/BoxNotFound";
import CreateBox from "../screens/CreateBox";
import UserProfile from "../screens/UserProfile";
import Settings from "../screens/Settings";

const FindBoxStack = createStackNavigator({
  FindBox: FindBox,
  ChatBox: ChatBox,
  BoxNotFound: BoxNotFound
});
const CreateBoxStack = createStackNavigator({
  CreateBox: CreateBox
});
const UserProfileStack = createStackNavigator({
  UserProfile: UserProfile,
  Settings: Settings
});

FindBoxStack.navigationOptions = {
  tabBarLabel: "Find Box",
  tabBarIcon: ({ focused }) => (
    <AppIcon name="search" size={28} focused={focused} />
  )
};

CreateBoxStack.navigationOptions = {
  tabBarLabel: "Create Box",
  tabBarIcon: ({ focused }) => (
    <AppIcon name="plus" size={28} focused={focused} />
  )
};

UserProfileStack.navigationOptions = {
  tabBarLabel: "User Profile",
  tabBarIcon: ({ focused }) => (
    <AppIcon name="user" size={28} focused={focused} />
  )
};

export default createBottomTabNavigator(
  {
    FindBoxStack,
    CreateBoxStack,
    UserProfileStack
  },
  {
    borderTopColor: "transparent"
  }
);
