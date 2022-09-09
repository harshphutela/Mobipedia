import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView,Linking } from 'react-native'
import React from 'react'

export default function AndroidRange() {

    return (
        <ScrollView style={styles.main}>

            <View >
                <Text style={styles.headtext}>Select a website from you want to <Text style={{ color: '#32de84', fontWeight: '900' }}>buy </Text>?</Text>
            </View>

            <View style={{ }}>
                <TouchableOpacity style={styles.topacity} onPress={()=>Linking.openURL('https://www.flipkart.com/search?q=30000+above+android&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.price_range.from%3D30000&p%5B%5D=facets.price_range.to%3DMax')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img1} source={require('./image/flipkart.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.amazon.in/s?i=electronics&bbn=1389401031&rh=n%3A1389401031%2Cp_36%3A3000000-&dc&qid=1661326605&rnid=1318502031&ref=sr_nr_p_36_1')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img2} source={require('./image/amazon.png')} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.reliancedigital.in/search?q=android%20mobile%2030000%20above:relevance:price:[30000%20TO%201499990]&page=0')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img3} source={require('./image/rel.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.croma.com/search?q=Mobile%20Phones%3Arelevance%3Acategory%3A95%3Aprice%3A30%2C001%20-%2050%2C000%3Aprice%3A50%2C001%20-%2075%2C000%3Aprice%3A75%2C001%20-%201%2C00%2C000%3Aprice%3A1%2C00%2C001%20-%202%2C00%2C000%3Abrand%3ASamsung%3Abrand%3AOnePlus%3Abrand%3AXiaomi%3Abrand%3AVivo%3Abrand%3ARealme%3Abrand%3AOPPO%3AZAStatusFlag%3Atrue%3AskuStockFlag%3Atrue%3AexcludeOOSFlag&text=Mobile%20Phones')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img4} source={require('./image/croma.png')} />
                    </View>
                </TouchableOpacity>

                <View >
                <Text style={{color:'white', fontSize:16, marginStart:'11%', marginBottom:'4%', marginTop:'5%'}}>Note: Selected Range is <Text style={{ color: '#32de84', fontWeight: '900' }}>Above 30000</Text></Text>
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
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: '5%',
        padding: "8%",
        marginBottom: '2%',
    },

    img1: {
        height: "150%",
        alignSelf: 'center',
        marginTop:-18,
        // backgroundColor: 'white',
        resizeMode: 'contain',
    },
    img2: {
        height: "180%",
        alignSelf: 'center',
        marginTop:-20,
        // backgroundColor: 'white',
        resizeMode: 'contain',
    },
    img3: {
        height: "150%",
        width:'45%',
        alignSelf: 'center',
        marginTop:-18,
        // backgroundColor: 'white',
        resizeMode: 'contain',
    },
    
    img4: {
        height: "150%",
        width:'30%',
        alignSelf: 'center',
        marginTop:-18,
        // backgroundColor: 'white',
        resizeMode: 'contain',
    },



    topacity:{
    marginStart:0
    },


    topacity2:{
        marginStart:0,
        marginTop:'4%',
        },
    





})