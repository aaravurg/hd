import { updateProfile, getAuth } from '@firebase/auth'
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { auth, db } from '../firebase'
import {set, ref} from 'firebase/database'
import { useNavigation } from '@react-navigation/core'

const RegisterScreen = () => {
   const navigation = useNavigation();


   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  
   const handleSignUp = () => {
    auth
        .createUserWithEmailAndPassword(email, password) // This is a Promise, which is essentially represents the completion / failure of an asynchronus operation
        .then(userCredentials => { // .then() excecutes after the Promise
            const user = userCredentials.user;
            console.log(user.email);
            updateProfile(user, {
                displayName: firstName + ' ' + lastName
            })
            .then(() => {
                console.log("User name: " + user.displayName)
            })
            .catch(error => alert(error.message))
            navigation.replace("Initial");
        })
        .catch(error => alert(error.message))
  }
   return (
   <View style={styles.container}>
     <Text style={styles.title}>
       Welcome to the American Wild Horse Campaign
     </Text>


     <View style={styles.inputContainer}>
                {/* Ask for user's first name */}
                <TextInput
                    placeholder = "Please enter your first name"
                    value = {firstName}
                    onChangeText = {text => setFirstName(text)}
                    style = {styles.input}
                />
               
                {/* Ask for user's last name */}
                <TextInput
                    placeholder = "Please enter your last name"
                    value = {lastName}
                    onChangeText = {text => setLastName(text)}
                    style = {styles.input}
                />

                {/* Ask for user's email */}
                <TextInput
                    placeholder = 'Please enter your email'
                    value = {email}
                    onChangeText = {(text) => setEmail(text)}
                    style = {styles.input}
                />

                {/* Ask the user for a password */}
                <TextInput
                    placeholder = 'Please enter a password'
                    value = {password}
                    onChangeText = {(text) => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.linkContainer}>
                <Text style={styles.link}>Already have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={styles.link}
                >
                    <Text style={styles.linkText}>Login</Text>
                </TouchableOpacity>
            </View>

            
   </View>
 )
}


export default RegisterScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF8FF',
    alignItems: 'center',
    justifyContent: 'center',
   },

  title: {
    flex: 1,
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
  container: {
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

  buttonText: { 
      flex: 1,
      color: '#333333',
      fontFamily: 'Poppins',
      fontSize: 24,
      fontWeight:  'bold',
  
  },

  button: {
    backgroundColor: '#FC6969',
    width: '60%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },

   inputContainer: {
    width: '80%'
   },


  input: {
    backgroundColor: 'white', // Bg color of input fields
    paddingHorizontal: 15, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 20, // Rounds edges of text fields
    marginTop: 40,
    height: 45, // Ensures that the input field and buttonContainer are separated
   },

   link : {
    color: '#333333',
        // fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '400'
   },
   linkText: {
    color: '#7871FF',
    // fontFamily: 'Manrope',
    fontWeight: '600',
    marginTop: 10
   
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
    position: 'absolute',
    top: '85%'
  },
})
