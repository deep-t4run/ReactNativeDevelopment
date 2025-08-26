import { View, StyleSheet } from "react-native";
import React from "react";
import { SendIcon } from "../assests/Icons";
import { s } from "react-native-size-matters";

export default function SocialCircle() {
  return (
    <View style={styles.circle}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    borderColor: "#E4E6E8"
  },
});
