import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Purple: undefined;
  Tomato: undefined;
  Gold: { name: string };
};

const PurpleScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.view}>
      <Text style={styles.text}>PurpleScreen</Text>
      <Button
        title="Go to tomato screen"
        onPress={() => navigation.navigate("Tomato")}
      />

      <Text onPress={() => navigation.navigate("Gold", { name: "Parth" })}>
        Name: Parth
      </Text>
      <Text onPress={() => navigation.navigate("Gold", { name: "Tarun" })}>
        Name: Tarun
      </Text>
    </View>
  );
}

export default PurpleScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  text: {
    fontSize: 30,
  },
});