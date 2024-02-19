import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Like from './Like';
import Home from './Home';
import Cart from './Cart';
import Notifi from './Notifi';
import { Image, StyleSheet, View } from 'react-native';
import Detail1 from './Detail1';


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: false, tabBarShowLabel: false, tabBarStyle: styles.styleTabBar }}>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('./ICON//home.png')}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: focused ? '#D17842' : '#52555A' }}
                        />
                    </View>
                ),
            }} name='Home' component={Home}></Tab.Screen>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('./ICON//cart.png')}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: focused ? '#D17842' : '#52555A' }}
                        />
                    </View>
                ),
            }}name='Cart' component={Cart}></Tab.Screen>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('./ICON//tim.png')}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: focused ? '#D17842' : '#52555A' }}
                        />
                    </View>
                ),
            }} name='LIKE' component={Like}></Tab.Screen>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('./ICON//notification.png')}
                            resizeMode='contain'
                            style={{ width: 24, height: 24, tintColor: focused ? '#D17842' : '#52555A' }}
                        />
                    </View>
                ),
            }} name='Notifi' component={Notifi}></Tab.Screen>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    styleTabBar: {
        height: 60,
        position: 'absolute',
        backgroundColor: '#0C0F14',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    }
})
export default TabNavigator;