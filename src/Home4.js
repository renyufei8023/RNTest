import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home4 = (props) => {
  return (
    <View>
      <Text onPress={() => {
        props.navigation.navigate('home5')
      }}
        style={{height: 200}}
      >Home4</Text>
    </View>
  )
}

export default Home4

const styles = StyleSheet.create({})