import { StyleSheet, SafeAreaView, Platform, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>

      <View style={styles.view2}></View>

      <View style={styles.view3}></View>

      <View style={styles.view4}></View>
{/* 
      <View style={styles.view5}></View>

      <View style={styles.view6}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    // alignContent: "center",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },

  view1: {
    height: 90,
    width: 90,
    backgroundColor: "#f17610ff",
  },

  view2: {
    height: 90,
    width: 90,
    backgroundColor: "grey",
  },

  view3: {
    height: 90,
    width: 90,
    backgroundColor: "green",
    bottom: 20,
    left: 12
  },

  view4: {
    height: 90,
    width: 90,
    backgroundColor: "blue",
  },

  // view5: {
  //   height: 90,
  //   width: 90,
  //   backgroundColor: "red",
  // },

  // view6: {
  //   height: 90,
  //   width: 90,
  //   backgroundColor: "pink",
  // },
});
