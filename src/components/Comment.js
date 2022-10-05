import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Comment({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{item.id}] {item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth:1,
    marginVertical:5,
    paddingHorizontal:10,
    justifyContent:'center',
    alignContent:"center",
    backgroundColor:"black"
  },
  comment:{
    color:"white"
  }
});
