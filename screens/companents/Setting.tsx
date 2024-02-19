import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHistory, faUser, faLocationDot, faCreditCard, faInfoCircle, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({ navigation }: any) => {
    const [isDialogMenuOpen, setIsDialogMenuOpen] = useState(false);
    const openDialogMenu = () => {
        setIsDialogMenuOpen(true);
    };
    const closeDialogMenu = () => {
        setIsDialogMenuOpen(false);
    };
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            console.error('Error removing user credentials from AsyncStorage:', error);
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
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faHistory} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>History</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push("PersonalDetails")}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faUser} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Personal Details</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Address</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faCreditCard} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Payment Method</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>About</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Help</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={openDialogMenu}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: '#FFA500', padding: 15, marginEnd: 30 }} />
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#fff", fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Log out</Text></View>
                        <Image style={{ width: 30, height: 30, backgroundColor: "white" }} source={{ uri: 'https://www.nicepng.com/png/full/528-5286820_right-arrow-white-png-clipart-arrow-next-arrow.png' }} />
                    </View>
                </TouchableOpacity>
            </View>
            {isDialogMenuOpen && (
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10 }}>
                        <Text style={{ color: "black", marginBottom: 10, fontSize: 20 }}>Are you sure want to logout!</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center" }}>
                            <TouchableOpacity onPress={closeDialogMenu}>
                                <Text style={{ color: '#FFA500', fontSize: 18, marginHorizontal: 10 }}>Cancle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLogout()} >
                                <Text style={{ color: '#FFA500', fontSize: 18, marginHorizontal: 10 }}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

export default Setting;
