import { StyleSheet, View, Image } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";

const UserAvatar = () => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://ts3.mm.bing.net/th?id=OIP.WCM4id5IFAmsHUJIWAPa3gHaEK&pid=15.1",
        }}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});
