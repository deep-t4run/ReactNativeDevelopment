import { SafeAreaView } from "react-native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <MainStackNavigator /> */}
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
