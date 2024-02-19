import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }: any) => {
 
    const [nhapEmail, setEmail] = useState('')
    const [nhapPass, setPass] = useState('')


    function kiemTtra() {
        if (nhapEmail.length == 0 || nhapPass.length == 0) {
            Alert.alert("Vui long nhap day du thong tin")
        } else {
            let url_check_login = "https://63da002919fffcd620bef32a.mockapi.io/user?email=" + nhapEmail;
            fetch(url_check_login)
                .then((res) => { return res.json() })
                .then(async (res_login) => {
                    if (res_login.length != 1) {
                       Alert.alert("Tài khoản hoặc mật khẩu không đúng!")                        
                        return
                    } else {
                        let objU = res_login[0]
                        if (objU.password != nhapPass) {
                            Alert.alert("Sai password")
                            return
                        } else {
                            try {
                                await AsyncStorage.setItem('user', JSON.stringify(objU))
                                navigation.navigate('Tab')
                            } catch (error) {
                                console.log(error)
                            }
                        }
                    }

                })
        }
    }
    return (
        <View style={{ backgroundColor: '#0C0F14', height: "100%", alignItems: 'center' }}>
            <Image style={{ width: 142, height: 142, marginTop: 40 }}
                source={require("./IMG/logo.png")} />
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: '700',
                fontFamily: 'Poppins',
                lineHeight: 26,
                letterSpacing: 0.5,
                marginTop: 10
            }}>Welcome to Lungo !!</Text>


            <Text style={{
                color: '#828282',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '700',
                fontFamily: 'Poppins',
                lineHeight: 26,
                letterSpacing: 0.5,
                marginTop: 16,
                marginBottom: 31
            }}>Login to Continue</Text>

            <TextInput style={styles.textInput} placeholder='Emall Address' placeholderTextColor={'#828282'} value={nhapEmail} onChangeText={setEmail} />
            <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor={'#828282'} secureTextEntry={true} value={nhapPass} onChangeText={setPass} />

            <TouchableOpacity style={styles.btn_signIn} onPress={kiemTtra}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontFamily: 'Poppins',
                    lineHeight: 26,
                    letterSpacing: 0.5,
                }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_gg}>
                <View style={{ height: 60, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 15, height: 15, }} source={require("./ICON/icongoogle.png")} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 250 }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontFamily: 'Poppins',
                        lineHeight: 26,
                        letterSpacing: 0.5,
                        alignItems: 'center'
                    }}>Sign in with Google</Text>
                </View>

            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={styles.text}>Don’t have account? Click </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.text_DK}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>Forget Password? Click </Text>
                <Text style={styles.text_DK}>Reset</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#828282',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5
    },
    text_DK: {
        color: '#D17842',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5
    },
    textInput: {
        width: 348,
        height: 48,
        flexShrink: 0,
        borderWidth: 1,
        borderColor: '#252A32',
        borderRadius: 8,
        color: '#828282',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        fontFamily: 'Poppins',
        lineHeight: 26,
        letterSpacing: 0.5,
        marginBottom: 16
    },
    btn_signIn: {
        width: 348,
        height: 57,
        borderRadius: 20,
        flexShrink: 0,
        backgroundColor: "#D17842",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    btn_gg: {
        width: 348,
        height: 57,
        borderRadius: 20,
        flexShrink: 0,
        backgroundColor: "white",
        marginTop: 9,
        flexDirection: 'row'
    },
})
export default Login;