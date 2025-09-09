import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TomatoScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>TomatoScreen</Text>
    </View>
  )
}

export default TomatoScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    text: {
        fontSize: 30,
    }
})