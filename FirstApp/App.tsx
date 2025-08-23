import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        <ActivityIndicator />
        <ActivityIndicator size={"large"} color={"blue"} />
        This is {Platform.OS === "android" ? "Android" : "IOS"} device
      </Text>
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
});
