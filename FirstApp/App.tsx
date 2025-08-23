import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Parth Singh</Text>

      <Text style={styles.contentText} numberOfLines={3}>
        This is a new text element. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit.
        <Text
          style={styles.linkText}
          onPress={() => {
            alert("Text clicked!");
          }}
        >
          Click here
        </Text>
        Eveniet quam labore assumenda repellendus neque doloribus nihil quo quae
        voluptas a.
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: "rgba(148, 96, 160, 1)" }}
      >
        <Pressable
          onPress={() => {
            alert("Image clicked!");
          }}
        >
          <Image
            source={require("./assets/splash-icon.png")}
            style={styles.image1}
          />
        </Pressable>

        <TouchableOpacity>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            blurRadius={2}
          />
        </TouchableOpacity>

        <Button
          title="Click Me"
          onPress={() => {
            alert("Button clicked!");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },

  titleText: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "rgba(13, 89, 241, 0.94)",
  },

  contentText: {
    fontSize: 20,
    color: "black",
  },

  linkText: {
    textDecorationLine: "underline",
    color: "red",
    fontWeight: "bold",
  },

  image1: {
    width: 200,
    height: 200,
  },

  image2: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
