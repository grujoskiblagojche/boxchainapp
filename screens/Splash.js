import React from "react";
import { View, Image, StyleSheet } from "react-native";

const logo = require("../assets/splash.png");

const Splash = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 400
  }
});

export default Splash;
