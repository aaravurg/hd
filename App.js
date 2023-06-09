import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './screens/InitialScreen';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import CameraScreen from './screens/CameraScreen';

const Stack = createNativeStackNavigator();


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
       options={{headerShown: false}}
       name="Initial"
       component={InitialScreen}
       />
       <Stack.Screen
       options={{headerShown: false}}
       name="Register"
       component={RegisterScreen} />
       <Stack.Screen
       options={{headerShown: false}}
       name="Login"
       component={LoginScreen} />
       <Stack.Screen
       options={{headerShown: false}}
       name="Camera"
       component={CameraScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
// test
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#333333',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
