import { StyleSheet, SafeAreaView, Platform, View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello Parth</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "grey" : "aqua",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  view1: {
    height: 200,
    width: 200,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
