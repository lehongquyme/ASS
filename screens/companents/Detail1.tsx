import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
const Detail1 = ({ route,navigation }: any) => {
    const [selectedSize, setSelectedSize] = useState('');
    const getTextBySize = (size: any) => {
        switch (size) {
            case '250gm':
                return '4.20';
            case '500gm':
                return '6.20';
            case '1Kg':
                return '8.20';
            default:
                return '0.00';
        }
    };
    const  { product }  = route.params;
    const { id, name, content, money, anh, add,describe } = product; 

    return (
        <View style={{ height: "100%", backgroundColor: '#0C0F14' }}>
            <ScrollView style={{ height: 600 }}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
                <ImageBackground style={{ width: '100%', height: 509 }} source={{uri:anh}}>
                    <View style={{ flex: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} >
                                <Image style={{ width: 33.43, height: 33.43 }} source={require('./ICON/back.png')} /></TouchableOpacity>
                            <Image style={{ width: 33.43, height: 33.43 }} source={require('./ICON/tim2.png')} />
                        </View>
                    </View>
                    <View style={{ flex: 3, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderTopRightRadius: 25, borderTopLeftRadius: 25, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginLeft: 30, marginRight: 30 }}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 20 }}>{name}</Text>
                                <Text style={{ color: '#AEAEAE', fontSize: 14, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}>{content}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Image style={{ width: 50, height: 50, marginRight: 10 }} source={require('./ICON/bean.png')} />
                                <Image style={{ width: 50, height: 50, marginLeft: 10 }} source={require('./ICON/arica.png')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30, marginTop: 30 }}>

                            <View style={{ width: 118, height: 40, backgroundColor: '#141921', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#AEAEAE', fontSize: 10, fontWeight: '500', fontFamily: 'Poppins', lineHeight: 20 }}>Medium Roasted</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground >
                <View style={{ backgroundColor: '#0C0F14', height: '100%' }}>
                    <View style={{ width: 351, height: 135, marginTop: 20, marginLeft: 30 }}>
                        <Text style={{ color: '#AEAEAE', fontSize: 14, fontWeight: 'bold', fontFamily: 'Poppins', lineHeight: 20, }}>Description</Text>
                        <Text style={{ color: '#AEAEAE', fontSize: 12, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, marginTop: 10, width: 300 }}>{describe}</Text>
                    </View>
                    <View style={{ marginLeft: 30, marginBottom: 20, marginTop: 10 }}>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 20, }}>Size</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                backgroundColor: '#141921',
                                borderColor: selectedSize === '250gm' ? '#D17842' : 'black',
                                borderRadius: 10
                            }}
                            onPress={() => setSelectedSize('250gm')}
                        >
                            <View style={{ width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: selectedSize === '250gm' ? '#D17842' : 'white', fontSize: 16, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}>250gm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                backgroundColor: '#141921',
                                borderColor: selectedSize === '500gm' ? '#D17842' : 'black',
                                borderRadius: 10
                            }}
                            onPress={() => setSelectedSize('500gm')}
                        >
                            <View style={{ width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: selectedSize === '500gm' ? '#D17842' : 'white', fontSize: 16, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}>500gm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                backgroundColor: '#141921',
                                borderColor: selectedSize === '1Kg' ? '#D17842' : 'black',
                                borderRadius: 10
                            }}
                            onPress={() => setSelectedSize('1Kg')}
                        >
                            <View style={{ width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: selectedSize === '1Kg' ? '#D17842' : 'white', fontSize: 16, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}>1Kg</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', fontFamily: 'Poppins', lineHeight: 20, }}>Price</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#D17842', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, }}>$</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, }}>{getTextBySize(selectedSize)}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <View style={{ width: 240, height: 60, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, }}>Add to Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Detail1;