import { useState } from "react";
import { SafeAreaView, TextInput, Text } from "react-native";

export default function App() {

  const [text, setText] = useState("");

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ff5722",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Enter your name"
        keyboardType="numeric"
        secureTextEntry={true}
        multiline={true}
        editable={true}
        autoFocus={true}
        value={text}
        onChangeText = {setText}
        style={{
          height: 40,
          width: "80%",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
        }}
      />

      <Text>My name is: {text}</Text>
    </SafeAreaView>
  );
}
