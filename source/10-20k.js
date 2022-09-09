import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView,Linking } from 'react-native'
import React from 'react'

export default function AndroidRange() {

    return (
        <ScrollView style={styles.main}>

            <View >
                <Text style={styles.headtext}>Select a website from you want to <Text style={{ color: '#32de84', fontWeight: '900' }}>buy </Text>?</Text>
            </View>

            <View style={{ }}>
                <TouchableOpacity style={styles.topacity} onPress={()=>Linking.openURL('https://www.flipkart.com/mobiles/~smartphones-under-rs20000/pr?sid=tyy%2C4io&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img1} source={require('./image/flipkart.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.amazon.in/s?k=under+20+k+phones&i=electronics&rh=n%3A976419031%2Cp_36%3A1000000-2000000&dc&adgrpid=63157845518&ext_vrnc=hi&gclid=EAIaIQobChMIv8W5nene-QIVxTUrCh0vjAM8EAAYASAAEgJDivD_BwE&hvadid=398059833997&hvdev=c&hvlocphy=9300670&hvnetw=g&hvqmt=b&hvrand=17124621486630548370&hvtargid=kwd-1193242189332&hydadcr=24566_1971421&qid=1661325289&rnid=1318502031&tag=googinhydr1-21&ref=sr_nr_p_36_1')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img2} source={require('./image/amazon.png')} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.reliancedigital.in/page/mobile-phones-under-rs-20000?searchQuery=:relevance:availability:Exclude%20out%20of%20Stock:price:[10000%20TO%2020000]&page=0')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img3} source={require('./image/rel.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.croma.com/search?q=Mobile%20Phones%3Arelevance%3Acategory%3A95%3Acategory%3A100001%3Aprice%3A10%2C001%20-%2020%2C000%3Abrand%3ASamsung%3Abrand%3AI%20KALL%3Abrand%3ARealme%3Abrand%3AVivo%3Abrand%3AOPPO%3Abrand%3AXiaomi%3Abrand%3ANokia%3Abrand%3AOnePlus%3Abrand%3AItel%3Abrand%3ATECNO%3AZAStatusFlag%3Atrue%3AskuStockFlag%3Atrue%3AexcludeOOSFlag&text=Mobile%20Phones')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, width: '80%', height:80, backgroundColor: 'white', marginBottom: '5%', alignSelf:'center' }}>
                        <Image style={styles.img4} source={require('./image/croma.png')} />
                    </View>
                </TouchableOpacity>

                <View >
                <Text style={{color:'white', fontSize:16, marginStart:'11%', marginBottom:'4%', marginTop:'5%'}}>Note: Selected Range is <Text style={{ color: '#32de84', fontWeight: '900' }}>From 10000 to 20000</Text></Text>
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