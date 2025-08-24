import { useState } from "react";
import { Button, View, Text, Modal } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#ff5722",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Show Modal" onPress={() => setModalState(true)} />

      <Modal animationType="slide" visible={modalState}>
        <Text style={{ fontSize: 50, marginTop: 50 }}>Modal is Opened</Text>
        <Button title="Hide Modal" onPress={() => setModalState(false)} />
        <AntDesign name="closecircleo" size={40} color="red" onPress={() => setModalState(false)} />
      </Modal>
    </View>
  );
}
