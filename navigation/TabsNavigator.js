import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AppIcon from "../components/AppIcon";

import FindBox from "../screens/FindBox";
import CreateBox from "../screens/CreateBox";
import UserProfile from "../screens/UserProfile";

const FindBoxStack = createStackNavigator({
  FindBox: FindBox
});
const CreateBoxStack = createStackNavigator({
  CreateBox: CreateBox
});
const UserProfileStack = createStackNavigator({
  UserProfile: UserProfile
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
