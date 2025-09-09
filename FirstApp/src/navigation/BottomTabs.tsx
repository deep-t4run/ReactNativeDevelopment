import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TomatoScreen from "../screens/TomatoScreen";
import PurpleScreen from "../screens/PurpleScreen";
import GoldScreen from "../screens/GoldScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tomato" component={TomatoScreen} />
      <Tab.Screen name="Purple" component={PurpleScreen} />
      <Tab.Screen name="Gold" component={GoldScreen} />
    </Tab.Navigator>
  );
}
