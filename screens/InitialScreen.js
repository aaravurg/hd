import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-web'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

const InitialScreen = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
      <Text style={styles.title}>
        American Wild Horse Campaign
      </Text>

      <Image style={styles.image}
        source={require('/Users/aarav/HackDavis/assets/horselogo.png')}
      />

      <Text style={styles.subtext_one}> 
        Take pictures of wild horses!
      </Text> 

      <Text style = {styles.subtext_two}> 
        Share your pictures!
      </Text> 

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
                style={styles.button}
            >
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
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
        fontSize: 32,
        fontWeight:  'bold',
        alignItems: 'center',
        textAlign: 'center',
        position: 'absolute',
        top: '10%',
    },
    image: {
        alignItems: 'center',
        width: 300,
        height: 300,
        position: 'absolute',
        top: '27%',

    },
    subtext_one: {
        flex: 1,
        color: '#333333',
        fontFamily: 'Poppins',
        fontSize: 24,
        position: 'absolute', 
        top: '64%',
    },
    subtext_two: {
        flex: 1,
        color: '#333333',
        fontFamily: 'Poppins',
        fontSize: 24,
        position: 'absolute', 
        top: '70%',
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