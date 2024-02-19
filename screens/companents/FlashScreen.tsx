import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FlashScreen = ({ navigation }: any) => {
    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    const checkIfLoggedIn = async () => {
        const userCredentials = await AsyncStorage.getItem('user');
        if (userCredentials) {
            navigation.replace("Tab");
        } else {
            setTimeout(
                nav
                , 2000)
        }
    };

    function nav() {
        navigation.replace("Login")
    }
    return (
        <View style={{ backgroundColor: '#0C0F14', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 189, height: 189, }}
                source={require("./IMG/logo.png")} />
        </View>
    );
}
const style = StyleSheet.create({

})
export default FlashScreen;