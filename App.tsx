/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './screens/companents/TabNavigator';
import Login from './screens/companents/Login';
import Register from './screens/companents/Register';
import Cart from './screens/companents/Cart';
import Pay from './screens/companents/Pay';
import ChiTietSP from './screens/companents/Detail';
import ChiTietSP1 from './screens/companents/Detail1';
import Notifi from './screens/companents/Notifi';
import FlashScreen from './screens/companents/FlashScreen';
import Like from './screens/companents/Like';
import Detail1 from './screens/companents/Detail1';
import Detail from './screens/companents/Detail';
import Setting from './screens/companents/Setting';
import PersonalDetails from './screens/companents/PersonalDetails';



const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()



const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, navigationBarHidden: true }}>
        <Stack.Screen name='FlashScreen' component={FlashScreen} options={{ animation: "flip" }}/>
        <Stack.Screen name='Login' component={Login} options={{ animation: "flip" }} />
        <Stack.Screen name='Register' component={Register} options={{ animation: "slide_from_right" }}/>
        <Stack.Screen name='Tab' component={TabNavigator} options={{ animation: "flip" }} />
        <Stack.Screen name='Detail1' component={Detail1} options={{ animation: "flip" }} />
        <Stack.Screen name='Detail' component={Detail} options={{ animation: "flip" }} />
        <Stack.Screen name='Pay' component={Pay} options={{ animation: "flip" }} />
        <Stack.Screen name='PersonalDetails' component={PersonalDetails} options={{ animation: "flip" }} />
        <Stack.Screen name='Setting' component={Setting} options={{ animation: "flip" }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <Detail1/>
    // <Detail/>
    // <ChiTietSP1/>
    // <ChiTietSP/>
             );
}

export default App;