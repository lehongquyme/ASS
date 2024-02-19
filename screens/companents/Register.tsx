import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Modal from 'react-native-modal';

const Register = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [address, setAddress] = useState('');
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    async function kiemTra() {
        if (name === "" || email === "" || password === "" || rePassword === "") {
            showMessage('Vui lòng nhập đầy đủ thông tin');
        } else if (rePassword !== password) {
            showMessage('Mật khẩu không khớp');
        } else {
            try {
                const response = await fetch('https://63da002919fffcd620bef32a.mockapi.io/user', {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        address: address
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    setIsSuccessModalVisible(true);
                    setTimeout(() => {
                        setIsSuccessModalVisible(false);
                        navigation.navigate("Login");
                    }, 2000);
                } else {
                    showMessage('Đã có lỗi xảy ra');
                }
            } catch (error) {
                console.error('Error adding user:', error);
            }
        }
    }

    const showMessage = (message: string) => {
        Alert.alert(message)
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => navigation.goBack()} >
                <Image source={require("./ICON/back.png")} style={{ width: 40, height: 40, marginTop: 10,marginStart: 10 }} /></TouchableOpacity>
            <Image style={styles.logo} source={require("./IMG/logo.png")} />
            <Text style={styles.heading}>Welcome to Lungo !!</Text>
            <Text style={styles.subHeading}>Register to Continue</Text>

            <TextInput style={styles.input} placeholder='Name' placeholderTextColor={'#828282'} value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#828282'} value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder='Address' placeholderTextColor={'#828282'} value={address} onChangeText={setAddress} />
            <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'#828282'} secureTextEntry={true} value={password} onChangeText={setPassword} />
            <TextInput style={styles.input} placeholder='Re-type password' placeholderTextColor={'#828282'} secureTextEntry={true} value={rePassword} onChangeText={setRePassword} />

            <TouchableOpacity style={styles.button} onPress={kiemTra}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.signIn}>
                <Text style={styles.text}>You have an account? Click </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textLink}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <Modal isVisible={isSuccessModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Đăng ký thành công</Text>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C0F14',
        height: '100%',
        alignItems: 'center'
    },
    logo: {
        width: 142,
        height: 142,
        marginTop: 20
    },
    heading: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Poppins',
        marginTop: 10
    },
    subHeading: {
        color: '#828282',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Poppins',
        marginTop: 16,
        marginBottom: 31
    },
    input: {
        width: 348,
        height: 48,
        borderWidth: 1,
        borderColor: '#252A32',
        borderRadius: 8,
        color: '#828282',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins',
        marginBottom: 16,
        paddingHorizontal: 10
    },
    button: {
        width: 348,
        height: 57,
        borderRadius: 20,
        backgroundColor: "#D17842",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins',
        letterSpacing: 0.5
    },
    signIn: {
        flexDirection: 'row',
        marginTop: 15
    },
    text: {
        color: '#828282',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5
    },
    textLink: {
        color: '#D17842',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText: {
        fontSize: 20,
        color: "black"
    },
});

export default Register;
