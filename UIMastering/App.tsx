import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./src/screens/IntroScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <IntroScreen /> */}
      {/* <ContactUsScreen /> */}
      {/* <HomeScreen /> */}
      <PaymentScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
