import { View, ImageBackground, Text } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/goku back.jpg")}
      style={{
        backgroundColor: "#ff5722",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: 100,
          height: 100,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text> Hello World! </Text>

      </View>
    </ImageBackground>
  );
}
