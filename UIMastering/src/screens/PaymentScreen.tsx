import { View, Text } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PayMethodCard from "../components/PayMethodCard";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";

const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: vs(50) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: s(17),
            color: "#181c2e",
            marginStart: s(12),
          }}
        >
          Payment
        </Text>
      </View>
      <PaymentList />

      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddButton />
      </View>
    </View>
  );
};

export default PaymentScreen;
