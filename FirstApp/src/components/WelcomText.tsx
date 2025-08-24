import { StyleSheet, View, Text } from "react-native";

const WelcomeText = () => {
  return (
    <View>
      <Text style={styles.welcomeText}>Welcome to the App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

export default WelcomeText;