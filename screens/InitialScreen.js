import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InitialScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        American Wild Horse Campaign
    </Text>
    </View>
  )
}

export default InitialScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        color: '#333333',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight:  'bold',
        alignItems: 'center',
        textAlign: 'center',
        position: 'absolute',
        top: '25%',
    },
})