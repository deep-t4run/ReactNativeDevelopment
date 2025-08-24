import { View } from "react-native";
import { scale, verticalScale, s, vs } from "react-native-size-matters";

export default function App() {
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
          width: s(300),
          height: vs(600),
        }}
      ></View>
    </View>
  );
}
