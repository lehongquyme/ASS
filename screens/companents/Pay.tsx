import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

const Pay = ({route,navigation}:any) => {
    const  { total }  = route.params;
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#0C0F14' }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity  onPress={()=>navigation.goBack()}>
                        <Image style={{ width: 40, height: 40 }} source={require('./ICON/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 36 }}>Payment</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', marginTop: 25, justifyContent: "space-around" }}>
                    <View style={{ width: 350, height: 241, borderColor: '#D17842', borderWidth: 2, borderRadius: 25 }}>
                        <Text style={{ marginLeft: 20, marginTop: 10, marginBottom: 10, color: 'white', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 20 }}>Credit Card</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ width: 320, height: 186 }} source={require('./IMG/visa.png')} />
                        </View>
                    </View>
                    <View>
                        <PaymentOption sty icon={require('./ICON/wallet.png')} label="Wallet" amount="$ 100.50" />
                        <PaymentOption icon={require('./ICON/ggplay.png')} label="Google Pay" amount={undefined} />
                        <PaymentOption icon={require('./ICON/appo.png')} label="Apple Pay" amount={undefined} />
                        <PaymentOption icon={require('./ICON/amazonplay.png')} label="Amazon Pay" amount={undefined} /></View>
                </View>

                {/* Separate view for the Price and Pay Button section at the bottom */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', fontFamily: 'Poppins', lineHeight: 20 }}>Price</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#D17842', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}>$</Text>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}> {total}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{ width: 240, height: 60, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', fontFamily: 'Poppins', lineHeight: 20 }}>Pay from Credit Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}

const PaymentOption = ({ icon, label, amount }: any) => {
    return (
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <TouchableOpacity style={{ width: 350, height: 50, backgroundColor: '#262B33', justifyContent: 'center', borderRadius: 25 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 30 }}>
                            <Image source={icon} /></View>
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 20 }}>{label}</Text>
                    </View>
                    {amount && (
                        <View>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins', lineHeight: 20 }}>{amount}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Pay;
