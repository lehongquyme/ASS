import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const Home = ({ navigation }: any) => {
    const [apiListTab, setListTab] = useState<any[]>([]);
    const [apiData1, setApiData1] = useState<any[]>([]);
    const [apiData2, setApiData2] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://lehongquyme.github.io/apiass/listTabHome.json');
                const response1 = await axios.get('https://lehongquyme.github.io/apiass/dataHomeAll.json');
                const response2 = await axios.get('https://lehongquyme.github.io/apiass/allTypeHomeCoffe.json');
                setListTab(response.data);
                setApiData1(response1.data);
                console.log(apiData1);

                setApiData2(response2.data);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch data from the API.');
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView style={{ height: '100%', marginBottom: 60, backgroundColor: '#0C0F14', }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={{ marginTop: 40 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                        <Image style={{ width: 30, height: 30 }} source={require('./ICON/setting.png')} /></TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }} source={require('./ICON/person.png')} />
                </View>
            </View>
            <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ fontWeight: '500', fontSize: 28, lineHeight: 28, color: 'white', fontStyle: 'normal' }}>Find the best coffee for you</Text>
            </View>
            <View style={{ backgroundColor: '#141921', borderRadius: 15, flexDirection: 'row', marginHorizontal: 10 }}>
                <View style={{ height: 45, justifyContent: 'center', marginLeft: 18 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('./ICON/search.png')} />
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Find Your Coffee...' placeholderTextColor={"#52555A"} />
                </View>
            </View>
            <FlatList style={{ flexDirection: 'row', }} horizontal={true} data={apiListTab} keyExtractor={item => item.id}
                renderItem={({ item }) => <View style={{ margin: 10 }}>
                    <Text style={styles.textMenu}>{item.name}</Text>
                </View>} />

            <FlatList style={{ flexDirection: 'row', marginTop: 36 }} horizontal={true} data={apiData1} keyExtractor={item => item.id}
                renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate("Detail", { product: item })}>
                    <View style={styles.viewSP}>
                        <View style={{ alignItems: 'center', marginTop: 12 }}>
                            <View style={{ width: 136, height: 136, borderRadius: 26, overflow: 'hidden' }}>
                                <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'flex-end' }} source={{ uri: item.anh }}>
                                    <View style={styles.viewStar}>
                                        <Image style={{ width: 10, height: 10, marginLeft: 12 }} source={{ uri: item.star }} />
                                        <Text style={{ color: '#FFF', fontSize: 10, fontStyle: 'normal', fontWeight: '600', lineHeight: 20, fontFamily: 'Poppins', marginLeft: 4 }}
                                        >{item.numberStar}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                        <View style={{ marginLeft: 12.51 }}>
                            <Text style={{ fontSize: 13, color: '#FFF', fontStyle: 'normal', fontWeight: '400', lineHeight: 20, fontFamily: 'Poppins' }}>{item.name}</Text>
                            <Text style={{ fontSize: 9, color: '#FFF', fontStyle: 'normal', fontWeight: '400', lineHeight: 20, fontFamily: 'Poppins' }}>{item.content}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                            <Text style={{ fontSize: 16, color: '#FFF', fontStyle: 'normal', fontWeight: '600', lineHeight: 20, fontFamily: 'Poppins' }}>{item.money}</Text>
                            <Image style={{ width: 28, height: 28 }} source={{ uri: item.add }} />
                        </View>

                    </View></TouchableOpacity>} />

            <Text style={{ fontSize: 15, color: '#FFF', fontStyle: 'normal', fontWeight: '500', lineHeight: 20, fontFamily: 'Poppins', marginTop: 23.32, marginLeft: 30 }}>Coffee beans</Text>

            <FlatList style={{ flexDirection: 'row', marginTop: 19 }} horizontal={true} data={apiData2} keyExtractor={item => item.id}
                renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate("Detail1", { product: item })}><View style={styles.viewSP}>
                    <View style={{ alignItems: 'center', marginTop: 12 }}>
                        <View style={{ width: 136, height: 136, borderRadius: 26, overflow: 'hidden' }}>
                            <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'flex-end' }} source={{ uri: item.anh }}>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{ marginLeft: 12.51 }}>
                        <Text style={{ fontSize: 13, color: '#FFF', fontStyle: 'normal', fontWeight: '400', lineHeight: 20, fontFamily: 'Poppins' }}>{item.name}</Text>
                        <Text style={{ fontSize: 9, color: '#FFF', fontStyle: 'normal', fontWeight: '400', lineHeight: 20, fontFamily: 'Poppins' }}>{item.content}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                        <Text style={{ fontSize: 15, color: '#FFF', fontStyle: 'normal', fontWeight: '600', lineHeight: 20, fontFamily: 'Poppins' }}>{item.money}</Text>
                        <Image style={{ width: 28.435, height: 28.435 }} source={{ uri: item.add }} />
                    </View>
                </View></TouchableOpacity>} />


        </ScrollView>
    );
}
const styles = StyleSheet.create({
    input: {
        width: "100%",
        color: '#52555A',
        fontFamily: 'Poppins',
        fontWeight: '500', fontSize: 18

    },
    textMenu: {
        color: 'white',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    viewSP: {
        width: 149,
        height: 245.679,
        borderRadius: 25,
        backgroundColor: '#252A32',
        marginHorizontal: 20
    },
    viewStar: {
        width: 53,
        height: 22,
        backgroundColor: '#00000099',
        borderBottomLeftRadius: 26,
        borderTopRightRadius: 26,
        flexDirection: 'row',
        alignItems: 'center',

    },
})

export default Home;