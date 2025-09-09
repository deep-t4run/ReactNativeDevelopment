import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface PayMethodCardProps {
  isSelected?: boolean;
  title: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

const PayMethodCard: FC<PayMethodCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: s(85),
      }}
    >
      {isSelected && (
        <View style={styles.checkMarkContainer}>
          <Entypo name="check" size={16} color="#fff" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PayMethodCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f5fa",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: s(14),
    color: "#464e57",
    textAlign: "center",
    marginTop: vs(4),
  },

  selectedCard: {
    backgroundColor: "#fff",
    borderColor: "#ff7622",
    borderWidth: s(2),
  },

  checkMarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#ff7622",
    position: "absolute",
    top: s(-8),
    right: s(-8),
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
