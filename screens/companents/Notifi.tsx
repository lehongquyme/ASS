import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
const Notifi = ({navigation}:any) => {
    return (
        <View style={{ height: "100%", backgroundColor: '#0C0F14',paddingBottom:60 }}>
            <ScrollView style={{ backgroundColor: '#0C0F14' }}>
                <StatusBar backgroundColor="#0C0F14" />
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%"}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                    <Image style={{ width: 30, height: 30 }} source={require('./ICON/setting.png')} /></TouchableOpacity>
                                            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: '600', fontFamily: 'Poppins' }}>Order History</Text>
                        <Image style={{ width: 30, height: 30 }} source={require('./ICON/person.png')} />
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 330 ,marginTop:10}}>
                        <View>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, fontWeight: '300', lineHeight: 21 }}>Order Date</Text>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, fontWeight: '600', lineHeight: 21 }}>20th March 16:23</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, fontWeight: '300', lineHeight: 21 }}>Total Amount</Text>
                            <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontSize: 14, fontWeight: '600', lineHeight: 21 }}>$ 74.40</Text>
                        </View>
                    </View>

                    <View style={{ width: 330, height: 225, backgroundColor: '#21262E', borderRadius: 23, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, alignItems: 'center' }}>
                            <Image style={{ width: 57, height: 57 }} source={require('./IMG/cofemilk2.png')} />
                            <View>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#FFFFFF' }}>Cappuccino</Text>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: '400', lineHeight: 20, color: '#FFFFFF' }}>With Steamed Milk</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#D17842' }}>$</Text>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#FFFFFF' }}> 37.20</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>S</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 4.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>8.40</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>M</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 6.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>12.40</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>L</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 8.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>16.40</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 330, height: 175, backgroundColor: '#21262E', borderRadius: 23, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, alignItems: 'center' }}>
                            <Image style={{ width: 57, height: 57 }} source={require('./IMG/cofemilk1.png')} />
                            <View>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#FFFFFF' }}>Cappuccino</Text>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: '400', lineHeight: 20, color: '#FFFFFF' }}>With Steamed Milk</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#D17842' }}>$</Text>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#FFFFFF' }}> 37.20</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>S</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 4.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>8.40</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>M</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 6.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>12.40</Text>
                            </View>
                        </View>


                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 330 }}>
                        <View>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, fontWeight: '300', lineHeight: 21 }}>Order Date</Text>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, fontWeight: '600', lineHeight: 21 }}>19th March 2023 </Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, fontWeight: '300', lineHeight: 21 }}>Total Amount</Text>
                            <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontSize: 14, fontWeight: '600', lineHeight: 21 }}>$ 74.40</Text>
                        </View>
                    </View>

                    <View style={{ width: 330, height: 225, backgroundColor: '#21262E', borderRadius: 23, marginTop: 10 }}>
                        <View style={{ marginTop: 15, width: 310, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Image style={{ width: 57, height: 57 }} source={require('./IMG/cofemilk2.png')} />
                                <View>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#FFFFFF' }}>Liberica Beans</Text>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: '400', lineHeight: 20, color: '#FFFFFF' }}>From Africa</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#D17842' }}>$</Text>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: '600', lineHeight: 20, color: '#FFFFFF' }}> 37.20</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20 }}>250gm</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 4.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>8.40</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20 }}>500gm</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 6.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>12.40</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 35, backgroundColor: '#0C0F14', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20 }}>1Kg</Text>
                                </View>
                                <View style={{ width: 91, height: 35, backgroundColor: '#0C0F14', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>$</Text>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 8.20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>X</Text>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}> 2</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#D17842', fontFamily: 'Poppins', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>16.40</Text>
                            </View>
                        </View>
                    </View>


                </View>

            </ScrollView>

            <View style={{alignItems:'center', marginTop:10,marginBottom:10}}>
                <TouchableOpacity>
                    <View style={{ width: 330, height: 60, backgroundColor: '#D17842', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '600', lineHeight: 20, color: '#FFFFFF' }}>Download</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Notifi;