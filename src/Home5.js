import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home5 = () => {
  return (
    <View
        style={{flex: 1, backgroundColor: 'red'}}
        onLayout={(e) => {
            console.log('==================onLayout==================');
            console.log(e.nativeEvent);
            console.log('====================================');
        }}
    >
      <ScrollView >
        
        <Text>Home5</Text>
        <Text>Home5</Text><Text>Home5</Text>
        <Text>Home5</Text>
        <Text>Home5</Text>
        <View style={{height: 1800, backgroundColor: 'red'}}></View>
        <View style={{height: 20, backgroundColor: 'blue'}}></View>
      </ScrollView>
    </View>
  )
}

export default Home5

const styles = StyleSheet.create({})