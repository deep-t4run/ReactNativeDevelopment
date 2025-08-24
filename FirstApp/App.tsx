import { SafeAreaView } from "react-native";

import AppLogoImage from "./src/components/AppLogoImage";
import WelcomeText from "./src/components/WelcomText";

export default function App() {

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ff5722",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppLogoImage />
      <WelcomeText />
    </SafeAreaView>
  );
}
