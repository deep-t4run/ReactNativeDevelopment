import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const tabsArr = ["Live", "Recorded"];

const ACTIVE_BG = "#75563b";
const ACTIVE_TEXT = "white";
const INACTIVE_TEXT = "#2c2016";

export default function TopTabs() {
  const [activeTab, setActiveTab] = useState(tabsArr[0]);

  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === tabName && { backgroundColor: ACTIVE_BG },
            ]}
            key={tabName}
            onPress={() => setActiveTab(tabName)}
          >
            <Text
              style={[
                styles.text,
                { color: activeTab === tabName ? ACTIVE_TEXT : INACTIVE_TEXT },
              ]}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: s(12),
    backgroundColor: "#f5f5f4",
    height: vs(48),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },

  tabButton: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: s(14),
    fontWeight: "semibold",
  },
});
