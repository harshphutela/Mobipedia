import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

export default function AndroidRange(props) {

    return (
        <ScrollView style={styles.main}>

            <View style={{flexDirection:'row'}}>
                <Text style={styles.headtext}>Select a suitable <Text style={{ color: '#32de84', fontWeight: '900' }}>Price-Range </Text>?</Text>
                <Image style={{height:70,width:'20%',resizeMode:'contain', marginTop:55,marginLeft:-30}} source={require('./image/android.png')} />
            </View>

            <View style={{ flexDirection: 'row', marginStart: 10 }}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Under10k')}>
                    <View style={styles.priceboxl}>
                        <Text style={styles.pricetext}>Under <Text style={{ color: '#32de84', fontWeight: '900' }}>10000 </Text></Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('10-20k')}>
                    <View style={styles.priceboxr}>
                        <Text style={styles.pricetext}>10000<Text style={{ color: '#32de84', fontWeight: '900' }}>-</Text>20000</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30, marginStart: 10 }}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('20-30k')}>
                    <View style={styles.priceboxl2}>
                        <Text style={styles.pricetext}>20000<Text style={{ color: '#32de84', fontWeight: '900' }}>-</Text>30000</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Above30k')}>
                    <View style={styles.priceboxr2}>
                        <Text style={styles.pricetext}>Above<Text style={{ color: '#32de84', fontWeight: '900' }}> 30000</Text></Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>

                <View style={styles.featurewise}>
                    <Text style={styles.featurewisetext}>Or you want to go with </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#32de84', fontWeight: '900', fontSize: 22, alignSelf: 'center', marginTop: "2%" }}>Feature-Wise Search</Text>

                    </TouchableOpacity>
                </View>


            </View>


        </ScrollView>


    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#2c2c2c',

    },

    headtext: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '5%',
        padding: "10%",
        marginBottom: '0%',
        marginStart:-10
    },
    pricetext: {
        color: 'black',
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
        marginTop: '25%',
        paddingHorizontal: 0
    },

    priceboxl: {
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 15,
        width: '90%',
        height: 120,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        marginBottom: '5%',
        marginLeft: '10%',
    },

    priceboxr: {
        borderWidth: 10,
        borderColor: 'white',
        borderRadius: 15,
        width: '90%',
        height: 120,
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        marginLeft: '10%',
    },
    priceboxl2: {
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 15,
        width: '90%',
        height: 120,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        marginBottom: '5%',
        marginLeft: '10%',
    },

    priceboxr2: {
        borderWidth: 10,
        borderColor: 'white',
        borderRadius: 15,
        width: '90%',
        height: 120,
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        marginLeft: '8%',
    },

    featurewisetext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 50,
        marginTop: 35
    },


})