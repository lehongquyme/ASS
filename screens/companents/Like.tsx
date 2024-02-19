import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').height;
import axios from 'axios';
const Like = ({ navigation }: any) => {
    const [apiData, setApiData] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://lehongquyme.github.io/apiass/dataLike.json');
                setApiData(response.data);
                console.log(apiData);

            } catch (error) {
                Alert.alert('Error', 'Failed to fetch data from the API.');
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }: any) => (
        <TouchableOpacity onPress={() => navigation.navigate("Detail", { product: item })}>
            <View >
                <ImageBackground source={{ uri:item.anh}} style={{
                    alignSelf: 'center', height: windowHeight / 1.75, width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20,
                    overflow: 'hidden',
                }}>
                    <Image source={{ uri: item.tim }} style={{ alignSelf: "flex-end", marginEnd: 20, marginTop: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: windowHeight / 2.4, backgroundColor: "#00000065", paddingVertical: 18, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                        <View style={{ alignSelf: "center" }} >
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.subtitle}>{item.content}</Text>
                            <View style={styles.starContainer}>
                                <Image style={styles.starIcon} source={{ uri: item.star }} />
                                <Text style={styles.ratingText}>{item.numberStar}</Text>
                                <Text style={styles.ratingTextSmall}>{item.soluongSD}</Text>
                            </View>
                        </View>
                        <View>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.iconsContainer}>
                                <Image style={styles.icon} source={{ uri: item.iconCofe }} />
                                <Image style={styles.icon} source={{ uri: item.milk }} /></View>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.roastedText}>Medium Roasted</Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>
                        {item.describe}
                    </Text>
                </View>
            </View></TouchableOpacity>
    );

    return (
        <ScrollView style={{ backgroundColor: '#0C0F14', marginBottom: 30 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                    <Image style={{ width: 30, height: 30 }} source={require('./ICON/setting.png')} /></TouchableOpacity>
                <Text style={styles.headerTitle}>Favorites</Text>
                <Image style={styles.headerIcon} source={require('./ICON/person.png')} />
            </View>
            <FlatList data={apiData} keyExtractor={item => item.id.toString()} renderItem={renderItem} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({




    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins',
        lineHeight: 20,
    },
    subtitle: {
        color: '#AEAEAE',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Poppins',
        lineHeight: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 2,
        width: 50,
        height: 50,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 15,
    },
    starContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    starIcon: {
        width: 20,
        height: 20,
    },
    ratingText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginLeft: 5,
    },
    ratingTextSmall: {
        color: 'white',
        fontSize: 10,
        alignSelf: "center",
        fontWeight: '400',
        fontFamily: 'Poppins',
        marginLeft: 5,
    },
    roastedContainer: {
        width: 120,
        height: 40,
        backgroundColor: '#141921',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roastedText: {
        color: '#AEAEAB',
        borderRadius: 5,
        alignSelf: "center",
        padding: 5,
        backgroundColor: '#141924',
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Poppins',
    },
    descriptionContainer: {
        width: '100%',
        paddingBottom: 50,
        backgroundColor: '#262B33',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginBottom: 30
    },
    descriptionTitle: {
        color: '#AEAEAE',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginTop: 20,
        marginLeft: 40,
    },
    descriptionText: {
        color: '#AEAEAE',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Poppins',
        lineHeight: 20,
        marginHorizontal: 40,
        marginTop: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    headerIcon: {
        width: 30,
        height: 30,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins',
    },
});

export default Like;
