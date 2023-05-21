import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { TextInput } from 'react-native-web'
import { TouchableOpacity } from 'react-native-web'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    
  const navigation = useNavigation()

  const handleLogin = () => {
    auth 
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with", user.email);
            navigation.replace("Camera")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
        <Text style = {styles.title}>
                Welcome Back!
        </Text>

        <Image style={styles.image}
        source={require('/Users/aarav/hd/assets/welcome.png')}
        />

        <View style={styles.inputContainer}>
                {/* Ask for user's email */}
                <TextInput style = {styles.input}

                    placeholder = 'Please enter your email'
                    value = {email}
                    onChangeText = {(text) => setEmail(text)}
                />

                {/* Ask the user for a password */}
                <TextInput style = {styles.input}

                    placeholder = 'Please enter a password'
                    value = {password}
                    onChangeText = {(text) => setPassword(text)}
                    secureTextEntry
                />
        </View>

        <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

        </View>
    </View>
  )
}

export default LoginScreen

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
    inputContainer: {
        width: '80%',
        position: 'absolute',
        top: '64%'
        
    },
    input: {
        backgroundColor: 'white', // Bg color of input fields
        paddingHorizontal: 15, // Horizontal padding
        paddingVertical: 10, // Vertical padding
        borderRadius: 20, // Rounds edges of text fields
        borderColor: '#FC6969', 
        marginTop: 40,
        height: 45, // Ensures that the input field and buttonContainer are separated
       },
    buttonContainer: {
        width: '120%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'absolute',
        top: '85%'
    },

    button: {
        backgroundColor: '#FC6969',
        width: '60%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },

    buttonText: {
        flex: 1,
        color: '#333333',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight:  'bold',
    }
})