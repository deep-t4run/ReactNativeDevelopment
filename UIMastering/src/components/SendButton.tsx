import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SendIcon } from '../assests/Icons'
import { s } from 'react-native-size-matters';
 

export default function SendButton() {
  return (
    <TouchableOpacity style = {styles.circle}>
      <SendIcon />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    circle: {
        width: s(46),
        height: s(46),
        borderRadius: s(23),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1077AF',
    }
});