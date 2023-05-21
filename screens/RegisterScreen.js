import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState} from 'react';


const RegisterScreen = () => {
   const navigation = useNavigation();


   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  
   return (
   <View styles={styles.container}>
     <Text styles={styles.title}>
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
   container: {
       flex: 1,
       backgroundColor: '#ECF8FF',
       alignItems: 'center',
       justifyContent: 'center',
   },


   input: {
       backgroundColor: 'white', // Bg color of input fields
       paddingHorizontal: 15, // Horizontal padding
       paddingVertical: 10, // Vertical padding
       borderRadius: 10, // Rounds edges of text fields
       marginTop: 20, // Ensures that the input field and buttonContainer are separated
      
   }
})
