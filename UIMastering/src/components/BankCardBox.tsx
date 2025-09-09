import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { CreditCardIcon } from "../assests/Icons";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      <CreditCardIcon />
      {/* <LottieView
        autoPlay
        style={{
          width: s(200),
          height: vs(100),
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assests/credit card.json")}
      /> */}
      <Text
        style={{
          color: "#32343e",
          fontSize: s(16),
          fontWeight: "bold",
          marginTop: vs(17),
        }}
      >
        No master card added
      </Text>

      <Text
        style={{
          color: "#2d2d2d",
          fontSize: s(15),
          marginTop: vs(6),
          textAlign: "center",
          letterSpacing: s(0.5),
        }}
      >
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8f9",
    borderRadius: s(10),
    marginTop: vs(25),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(35),
    paddingHorizontal: s(30),
    textAlign: "center",
  },
});
