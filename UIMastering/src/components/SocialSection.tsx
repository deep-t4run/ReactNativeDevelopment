import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

interface SocialSectionProps {
    icon: React.ReactNode;
    platformName: string;
}

export default function SocialSection(props: SocialSectionProps) {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                {props.icon}
            </View>
            <Text style={styles.text}>{props.platformName}</Text>
            <SendButton />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: s(1),
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },

  text: {
    flex: 1,
    fontSize: s(12),
    color: "#8083A3",
    marginStart: s(14),
  },

  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  },
});
