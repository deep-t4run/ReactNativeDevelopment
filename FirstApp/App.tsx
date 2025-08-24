import { View, Dimensions } from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  const PHONE_WIDTH = Dimensions.get("screen").width;
  const PHONE_HEIGHT = Dimensions.get("screen").height;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: PHONE_WIDTH,
          height: PHONE_HEIGHT/2,
        }}
      ></View>
    </View>
  );
}
