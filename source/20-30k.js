import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView,Linking } from 'react-native'
import React from 'react'

export default function AndroidRange() {

    return (
        <ScrollView style={styles.main}>

            <View >
                <Text style={styles.headtext}>Select a website from you want to <Text style={{ color: '#32de84', fontWeight: '900' }}>buy </Text>?</Text>
            </View>

            <View style={{ }}>
                <TouchableOpacity style={styles.topacity} onPress={()=>Linking.openURL('https://www.flipkart.com/mobiles/~smartphones-under-rs30000/pr?sid=tyy%2C4io&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img1} source={require('./image/flipkart.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.amazon.in/s?k=under+30k+phones&i=electronics&rh=p_36%3A2000000-3000000&crid=34AP6WHL2D42H&qid=1661326038&rnid=1318502031&sprefix=under+30+k+phones%2Celectronics%2C323&ref=sr_nr_p_36_3')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img2} source={require('./image/amazon.png')} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.reliancedigital.in/page/mobile-phones-under-rs-20000?searchQuery=:relevance:availability:Exclude%20out%20of%20Stock:price:[20000%20TO%2030000]&page=0')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img3} source={require('./image/rel.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.croma.com/search?q=Mobile%20Phones%3Arelevance%3Acategory%3A95%3Aprice%3A20%2C001%20-%2030%2C000%3Abrand%3AXiaomi%3Abrand%3ASamsung%3Abrand%3AVivo%3Abrand%3ARedmi%3Abrand%3ARealme%3Abrand%3AOPPO%3Abrand%3AOnePlus%3AZAStatusFlag%3Atrue%3AskuStockFlag%3Atrue%3AexcludeOOSFlag&text=Mobile%20Phones')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img4} source={require('./image/croma.png')} />
                    </View>
                </TouchableOpacity>

                <View >
                <Text style={{color:'white', fontSize:16, marginStart:'11%', marginBottom:'4%', marginTop:'5%'}}>Note: Selected Range is <Text style={{ color: '#32de84', fontWeight: '900' }}>From 20000 to 30000</Text></Text>
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