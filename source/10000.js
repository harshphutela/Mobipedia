import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView,Linking } from 'react-native'
import React from 'react'

export default function AndroidRange() {

    return (
        <ScrollView style={styles.main}>

            <View >
                <Text style={styles.headtext}>Select a website from you want to <Text style={{ color: '#32de84', fontWeight: '900' }}>buy </Text>?</Text>
            </View>

            <View style={{ }}>
                <TouchableOpacity style={styles.topacity} onPress={()=>Linking.openURL('https://www.flipkart.com/mobiles/~mobile-phones-under-rs10000/pr?sid=tyy%2C4io&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D10000')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img1} source={require('./image/flipkart.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.amazon.in/s?k=under+10+k+phones&rh=n%3A976419031%2Cp_36%3A1318505031&dc&ds=v1%3A%2B67VF0h%2BS8j66Lj5vxp8xPHYJYEB8ANV%2Fswl5MXUVBs&adgrpid=63157845518&ext_vrnc=hi&gclid=EAIaIQobChMIv8W5nene-QIVxTUrCh0vjAM8EAAYASAAEgJDivD_BwE&hvadid=398059833997&hvdev=c&hvlocphy=9300670&hvnetw=g&hvqmt=b&hvrand=17124621486630548370&hvtargid=kwd-1193242189332&hydadcr=24566_1971421&qid=1661321600&rnid=1318502031&tag=googinhydr1-21&ref=sr_nr_p_36_1')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img2} source={require('./image/amazon.png')} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.reliancedigital.in/page/mobile-phones-under-rs-10000')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img3} source={require('./image/rel.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.croma.com/clp/best-mobile-phones-between-5000-to-10000')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img4} source={require('./image/croma.png')} />
                    </View>
                </TouchableOpacity>

                <View >
                <Text style={{color:'white', fontSize:16, marginStart:'11%', marginBottom:'4%', marginTop:'5%'}}>Note: Selected Range is <Text style={{ color: '#32de84', fontWeight: '900' }}>Under 10000</Text></Text>
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