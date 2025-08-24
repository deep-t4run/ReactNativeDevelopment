import { View, Image, StyleSheet } from "react-native";

const AppLogoImage = () => {
  return (
    <View>
      <Image
        source={require("../../assets/favicon.png")}
        style={styles.logo}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default AppLogoImage;
