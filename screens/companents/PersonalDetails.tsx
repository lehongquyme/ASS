import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PersonalDetails = ({ navigation }: any) => {
    const [userDetails, setUserDetails] = useState({});
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    useEffect(() => {
        const getUserCredentials = async () => {
            try {
                const userCredentials = await AsyncStorage.getItem('user');
                if (userCredentials) {
                    const { email, password } = JSON.parse(userCredentials);
                    const response = await axios.get('https://63da002919fffcd620bef32a.mockapi.io/user', { params: { email, password } });
                    const filteredUsers = response.data.filter((user: any) => user.email === email && user.password === password);
                    if (filteredUsers.length > 0) {
                        const userDetails: any = filteredUsers[0];
                        setUserDetails(userDetails);
                        setName(userDetails.name);
                        setAddress(userDetails.address);
                        setPassword(userDetails.password);
                    }
                }
            } catch (error) {
                console.error('Error retrieving user credentials from AsyncStorage:', error);
            }
        };

        getUserCredentials();
    }, []);
    const saveChanges = async () => {
        try {
            const response = await axios.put(`https://63da002919fffcd620bef32a.mockapi.io/user/${userDetails.id}`, {
                name: name,
                address: address,
                password: password
            });
            console.log('Updated user details:', response.data);
            const userCredentials = { email: userDetails.email, password: password };
            await AsyncStorage.setItem('user', JSON.stringify(userCredentials));
            navigation.goBack();
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#0C0F14' }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={{ paddingVertical: 30, marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={{ width: 40, height: 40 }} source={require('./ICON/back.png')} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', fontFamily: 'Poppins' }}>Setting</Text>
                    </View>
                </View>

                <Image style={{ width: 150, height: 150, marginTop: 60, borderRadius: 10, alignSelf: "center" }} source={{ uri: "https://cf.shopee.vn/file/79da351e31db9b37635b22fe3e668569" }} />
                <View style={{ flexDirection: "row", width: '90%', marginTop: 80, alignItems: "center" }}>
                    <Text style={{ color: '#FFF', width: '25%' }}>Name</Text>
                    <TextInput style={{ borderWidth: 0.5, borderColor: "gray", borderRadius: 10, color: '#FFF', width: '90%', marginHorizontal: 5 }} placeholder="Name"
                        value={name}
                        onChangeText={setName} />
                </View>
                <View style={{ flexDirection: "row", width: '90%', marginTop: 10, alignItems: "center" }}>
                    <Text style={{ color: '#FFF', width: '25%' }}>Email</Text>
                    <TextInput style={{ borderWidth: 0.5, borderColor: "gray", borderRadius: 10, color: '#FFF', width: '90%', marginHorizontal: 5 }} defaultValue={userDetails.email} editable={false} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, width: '90%', alignItems: "center" }}>
                    <Text style={{ color: '#FFF', width: '25%' }}>Address</Text>
                    <TextInput style={{ borderWidth: 0.5, borderColor: "gray", borderRadius: 10, color: '#FFF', width: '90%', marginHorizontal: 5 }} placeholder="Address"
                        value={address}
                        onChangeText={setAddress} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10, width: '90%', alignItems: "center" }}>
                    <Text style={{ color: '#FFF', width: '25%' }}>Password</Text>
                    <TextInput style={{ borderWidth: 0.5, borderColor: "gray", borderRadius: 10, color: '#FFF', width: '90%', marginHorizontal: 5 }} placeholder="Password"
                        value={password}
                        onChangeText={setPassword} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, width: '90%', alignItems: "center" }}>
                    <Text style={{ color: '#FFF', width: '25%' }}>RePassword</Text>
                    <TextInput style={{ borderWidth: 0.5, borderColor: "gray", borderRadius: 10, color: '#FFF', width: '90%', marginHorizontal: 5 }} placeholder="Re-enter Password"
                        value={rePassword}
                        onChangeText={setRePassword} />
                </View>
            </View>
            <TouchableOpacity onPress={saveChanges}>
                <View style={{ width: "30%", backgroundColor: '#D17842', alignItems: 'center', justifyContent: 'center', borderRadius: 20, alignSelf: "center" }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, paddingVertical: 10, fontWeight: 'bold', lineHeight: 20, color: '#FFFFFF' }}>Save</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default PersonalDetails;
