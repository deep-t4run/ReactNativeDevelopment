import { StyleSheet, SafeAreaView, Platform, View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello Parth</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.view3}></View>
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
    marginBottom: 20,
  },

  view2: {
    height: 200,
    width: 200,
    backgroundColor: "red",
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },

  view3: {
    height: 30,
    width: 30,
    backgroundColor: "black",
  },

  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
