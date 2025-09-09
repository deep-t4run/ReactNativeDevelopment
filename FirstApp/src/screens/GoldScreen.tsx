import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation, useRoute, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Gold: { name: string };
  Purple: undefined;
};

const GoldScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();
  // Type assertion to help TypeScript understand the route params
  const params = (route as { params?: { name?: string } }).params;

  console.log(route.name);
  console.log(params);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>GoldScreen</Text>
      <Button
        title="Go to purple screen"
        onPress={() => navigation.navigate("Purple")}
      />
      <Text>Hello, {params?.name ?? "Guest"}</Text>
    </View>
  );
};

export default GoldScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
  },
  text: {
    fontSize: 30,
  },
});
