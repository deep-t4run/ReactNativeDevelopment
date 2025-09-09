import { createStackNavigator } from "@react-navigation/stack";
import GoldScreen from "../screens/GoldScreen";
import PurpleScreen from "../screens/PurpleScreen";
import TomatoScreen from "../screens/TomatoScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Gold" component={GoldScreen} />
      <Stack.Screen name="Purple" component={PurpleScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Tomato",
        }}
        name="Tomato"
        component={TomatoScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
