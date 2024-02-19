import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, FlatList } from 'react-native';
const Cart = ({ navigation }: any) => {
    const [quantities, setQuantities] = useState({ cappuccino: 0, cappuccino1: 0, cappuccino2: 0, cappuccino3: 0, robustaBeans: 0, libericaCoffeeBeans1: 0, libericaCoffeeBeans2: 0, libericaCoffeeBeans3: 0 });

    const increaseQuantity = (item: any) => {
        setQuantities(prevState => ({
            ...prevState,
            [item]: prevState[item] + 1
        }));
    };

    const decreaseQuantity = (item: any) => {
        if (quantities[item] > 0) {
            setQuantities(prevState => ({
                ...prevState,
                [item]: prevState[item] - 1
            }));
        }
    };

    const prices: any = {
        cappuccino: 6.20,
        robustaBeans: 6.20,
    };

    const dataG = [
        { weight: '250gm', quantityKey: 'libericaCoffeeBeans1', prices: 4.20 },
        { weight: '500gm', quantityKey: 'libericaCoffeeBeans2', prices: 6.20 },
        { weight: '1Kg', quantityKey: 'libericaCoffeeBeans3', prices: 8.20 }
    ];
    const data = [
        { size: 'S', quantityKey: 'cappuccino1', prices: 4.20 },
        { size: 'M', quantityKey: 'cappuccino2', prices: 6.20 },
        { size: 'L', quantityKey: 'cappuccino3', prices: 8.20 }
    ];

    const calculateTotal = () => {
        let total = 0;
        for (const item of [...data, ...dataG]) {
            total += quantities[item.quantityKey] * item.prices;
        }
        total += quantities['robustaBeans'] * prices['robustaBeans'];
        total += quantities['cappuccino'] * prices['cappuccino'];
        return total.toFixed(2);
    };

    const renderItemG = ({ item }: any) => {
        const { weight, quantityKey } = item;
        return (
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 295.44 }}>
                    <TouchableOpacity>
                        <View style={{ width: 72, height: 35, backgroundColor: '#0C0F14', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 10, fontWeight: '500', lineHeight: 20 }}>{weight}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>$ {item.prices.toFixed(2)}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 130 }}>
                            <TouchableOpacity onPress={() => decreaseQuantity(quantityKey)}>
                                <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/tru.png')} />
                            </TouchableOpacity>
                            <View style={{ width: 50, height: 30, backgroundColor: '#0C0F14', borderRadius: 7, borderColor: '#D17842', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>{quantities[quantityKey]}</Text>
                            </View>
                            <TouchableOpacity onPress={() => increaseQuantity(quantityKey)}>
                                <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/cong.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    const renderItem = ({ item }: any) => {
        const { size, quantityKey } = item;
        return (
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 295.44 }}>
                    <TouchableOpacity>
                        <View style={{ width: 72, height: 35, backgroundColor: '#0C0F14', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 16, fontWeight: '500', lineHeight: 20 }}>{size}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>$ {item.prices.toFixed(2)}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 130 }}>
                            <TouchableOpacity onPress={() => decreaseQuantity(quantityKey)}>
                                <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/tru.png')} />
                            </TouchableOpacity>
                            <View style={{ width: 50, height: 30, backgroundColor: '#0C0F14', borderRadius: 7, borderColor: '#D17842', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>{quantities[quantityKey]}</Text>
                            </View>
                            <TouchableOpacity onPress={() => increaseQuantity(quantityKey)}>
                                <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/cong.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ height: "100%", backgroundColor: '#0C0F14', paddingBottom: 60 }}>
            <ScrollView style={{ backgroundColor: '#0C0F14' }}>
                <StatusBar translucent backgroundColor="#0C0F14" />


                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", marginBottom: 15, paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                            <Image style={{ width: 30, height: 30 }} source={require('./ICON/setting.png')} /></TouchableOpacity>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: "bold", fontFamily: 'Poppins' }}>Cart</Text>
                        <Image style={{ width: 30, height: 30 }} source={require('./ICON/person.png')} />
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: 330, height: 255, backgroundColor: '#262B33', borderRadius: 23 }}>
                        <View style={{ width: 280, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                <Image style={{ width: 100, height: 100 }} source={require('./IMG/cofemilk1.png')} />
                                <View>
                                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '400', fontSize: 16, lineHeight: 20, marginBottom: 5 }}>Cappuccino</Text>
                                    <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins', fontWeight: '400', fontSize: 10, lineHeight: 20, marginBottom: 10 }}>With Steamed Milk</Text>
                                    <View style={{ width: 118, height: 40, backgroundColor: '#141921', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                        <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20 }}>Medium Roasted</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <FlatList
                            data={data}
                            scrollEnabled={false}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>


                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <View style={{ width: 330, height: 154, backgroundColor: '#262B33', borderRadius: 23, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image style={{ width: 126, height: 126 }} source={require('./IMG/cofemilk2.png')} />
                            <View>
                                <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '400', fontSize: 15, lineHeight: 20, marginBottom: 5 }}>Cappuccino</Text>
                                <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins', fontWeight: '400', fontSize: 9, lineHeight: 20, marginBottom: 10 }}>With Steamed Milk</Text>
                                <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <View style={{ width: 72, height: 35, backgroundColor: '#0C0F14', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 16, fontWeight: '500', lineHeight: 20 }}>M</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '600', fontSize: 20, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 20, lineHeight: 20 }}> 6.20</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 130 }}>
                                        <TouchableOpacity onPress={() => decreaseQuantity('cappuccino')}>
                                            <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/tru.png')} />
                                        </TouchableOpacity>
                                        <View style={{ width: 50, height: 30, backgroundColor: '#0C0F14', borderRadius: 7, borderColor: '#D17842', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>{quantities.cappuccino}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => increaseQuantity('cappuccino')}>
                                            <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/cong.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <View style={{ width: 330, height: 154, backgroundColor: '#262B33', borderRadius: 23, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image style={{ width: 126, height: 126 }} source={require('./IMG/hatcofeRadius1.png')} />
                            <View>
                                <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '400', fontSize: 15, lineHeight: 20, marginBottom: 5 }}>Robusta Beans</Text>
                                <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins', fontWeight: '400', fontSize: 9, lineHeight: 20, marginBottom: 10 }}>From Africa</Text>
                                <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <View style={{ width: 72, height: 35, backgroundColor: '#0C0F14', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 10, fontWeight: '500', lineHeight: 20 }}>250gm</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '600', fontSize: 20, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 20, lineHeight: 20 }}> 6.20</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 130 }}>
                                        <TouchableOpacity onPress={() => decreaseQuantity('robustaBeans')}>
                                            <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/tru.png')} />
                                        </TouchableOpacity>
                                        <View style={{ width: 50, height: 30, backgroundColor: '#0C0F14', borderRadius: 7, borderColor: '#D17842', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>{quantities.robustaBeans}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => increaseQuantity('robustaBeans')}>
                                            <Image style={{ width: 28.44, height: 28.44 }} source={require('./ICON/cong.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 330, height: 255, backgroundColor: '#262B33', borderRadius: 23 }}>
                        <View style={{ width: 310, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                <Image style={{ width: 100, height: 100 }} source={require('./IMG/hatcofeRadius.png')} />
                                <View>
                                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '400', fontSize: 16, lineHeight: 20, marginBottom: 5 }}>Liberica Coffee Beans</Text>
                                    <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins', fontWeight: '400', fontSize: 10, lineHeight: 20, marginBottom: 10 }}>With Steamed Milk</Text>
                                    <View style={{ width: 118, height: 40, backgroundColor: '#141921', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                        <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20 }}>Medium Roasted</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <FlatList
                            data={dataG}
                            scrollEnabled={false}
                            renderItem={renderItemG}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20
            }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', fontFamily: 'Poppins', lineHeight: 20, }}>Total Price</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#D17842', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, }}>$</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, }}> {calculateTotal()}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Pay", { total: calculateTotal() })}>
                    <View style={{ width: 240, height: 60, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20, }}>Pay</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;