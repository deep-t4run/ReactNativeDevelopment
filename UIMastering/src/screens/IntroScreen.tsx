import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import FoodLogo from "../assests/FoodLogo";
import SunImage from "../assests/SumImage";

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <FoodLogo/>
      <SunImage style={styles.sunImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  sunImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
