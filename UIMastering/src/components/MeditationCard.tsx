import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { VideoIcon } from "../assests/Icons";

const phoneWidth = Dimensions.get("window").width;
const cardWidth = (phoneWidth - s(16) * 3) / 2;

type MeditationCardProps = {
  imageUrl: string;
  title: string;
  date: string;
};

export default function MeditationCard({
  imageUrl,
  title,
  date,
}: MeditationCardProps) {
  return (
    <View>
      <ImageBackground
        style={styles.imageContainer}
        imageStyle={styles.image}
        source={{
          uri: imageUrl,
        }}
      >
        <View style={styles.overlay} />
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>Live</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <VideoIcon />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },

  cardContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10),
  },

  title: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: "semibold",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  dateText: {
    color: "#fff",
    fontSize: s(12),
    marginStart: s(7),
  },

  liveBadge: {
    backgroundColor: "#e41111",
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    position: "absolute",
    top: vs(7),
    right: s(10),
    justifyContent: "center",
    alignItems: "center",
  },

  liveText: {
    fontSize: s(11),
    fontWeight: "semibold",
    color: "#fff",
  },
});
