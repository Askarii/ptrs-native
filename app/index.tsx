import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

 
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platinum Taxi Ride Share Club</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})