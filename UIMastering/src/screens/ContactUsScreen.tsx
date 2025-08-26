import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import SocialSection from "../components/SocialSection";
import {
  FontAwesome6,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

export default function ContactUsScreen() {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(16) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>

      <Text style={styles.screenTitle}>Contact Us</Text>

      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          platformName="WhatsApp"
          icon={<FontAwesome name="whatsapp" size={s(22)} color="#178AD9" />}
        />
        <SocialSection
          platformName="Twitter"
          icon={<AntDesign name="twitter" size={s(22)} color="#178AD9" />}
        />
        <SocialSection
          platformName="Instagram"
          icon={<Entypo name="instagram" size={s(22)} color="#178AD9" />}
        />
        <SocialSection
          platformName="Snap Chat"
          icon={
            <FontAwesome name="snapchat-ghost" size={s(22)} color="#178AD9" />
          }
        />
        <SocialSection
          platformName="Tik Tok"
          icon={<FontAwesome6 name="tiktok" size={s(22)} color="#178AD9" />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  screenTitle: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: vs(20),
    marginStart: s(19),
  },

  socialContainer: {
    backgroundColor: "#f5f5fa",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },

  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
});
