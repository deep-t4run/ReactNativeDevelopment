import { View, Text, FlatList } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

export default function HomeScreen() {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: "#1d150f",
          fontSize: s(20),
          fontWeight: "semibold",
          marginBottom: vs(6),
        }}
      >
        Meditations
      </Text>

      <Text
        style={{
          color: "#2c2016",
          fontSize: s(14),
          marginBottom: vs(16),
        }}
      >
        Lorem ipsum dolor sit amet.
      </Text>

      <TopTabs />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            imageUrl={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(150),
          paddingTop: vs(24),
        }}
      />
    </View>
  );
}
