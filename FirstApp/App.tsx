import { useState } from "react";
import { Button, View, Text } from "react-native";

export default function App() {
  const [state, setState] = useState(0);

  const increaseValue = () => {
    setState(state + 1);
  };

  const decreaseValue = () => setState(state - 1);

  const resetValue = () => setState(0);

  return (
    <View
      style={{
        backgroundColor: "#white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Increase" onPress={increaseValue} />
      <Text style={{ fontSize: 50 }}>{state}</Text>
      <Button title="Decrease" onPress={decreaseValue} />
      <Button title="Reset" onPress={resetValue} />
    </View>
  );
}
