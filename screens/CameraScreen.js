import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import {Camera} from 'expo-camera'
import { useState
 } from 'react'
 import { Alert } from 'react-native'

const CameraScreen = () => {
  const [startCamera,setStartCamera] = useState(false)

  const startc = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  return (
    
    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={startc}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Take Picture</Text>
                </TouchableOpacity>

        </View>
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ECF8FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '120%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'absolute',
        top: '78%'
    },
    button: {
        backgroundColor: '#FC6969',
        width: '60%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText : {
        flex: 1,
        color: '#333333',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight:  'bold',
    }

})