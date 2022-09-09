import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView,Linking} from 'react-native'
import React from 'react'

export default function MainHome(props) {

    return (
        <ScrollView style={styles.main}>


            <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: '4%', marginBottom: '4%' }}>
                <Image style={{ height: 80, width: '30%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginStart: "5%" }} source={require('./image/iphone.png')} />
                <Text style={styles.headtext}>13</Text>
            </View>


            <View style={{ alignSelf: 'center', marginBottom: '2%', resizeMode: 'contain' }}>
                <Image style={styles.img1} source={require('./image/ip13propos.png')} />
            </View>


            
            <View style={{ alignSelf: 'center', marginBottom: '2%', resizeMode: 'contain' }}>
                <Image style={styles.img2} source={require('./image/13feat.png')} />
            </View>

            <View>
                <TouchableOpacity style={styles.topacity1} onPress={()=>Linking.openURL('https://www.apple.com/in/iphone-13-pro/key-features/')}>
                    <Text style={{color:'white', alignSelf:'center',marginTop:5,}}> More Info </Text>
                </TouchableOpacity>
            </View>

        

            <View>
                <TouchableOpacity style={styles.topacity2} onPress={()=>Linking.openURL('https://www.apple.com/in/shop/goto/buy_iphone/iphone_13_pro')}>
                    <Text style={{color:'black', alignSelf:'center',marginTop:3,}}> Buy </Text>
                </TouchableOpacity>
            </View>

           
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        //#2c2c2c

    },

    headtext: {
        color: 'black',
        fontSize: 33,
        fontWeight: '600',
        alignSelf: 'center',
        marginStart: '1%',
        marginTop: "1%",
    },
    topacity1: {

        backgroundColor:'black',
        width:150,
        height:30,
        borderColor:'black', 
        borderWidth:2,
        borderRadius:120,
        alignSelf:'center', 
        marginTop:20

    },
    topacity2: {

        backgroundColor:'white',
        width:150,
        height:30,
        borderColor:'black', 
        borderWidth:1.5,
        borderRadius:120,
        alignSelf:'center', 
        marginTop:20,
        marginBottom:'15%',

    },

    img1: {
        //    resizeMode:'contain',
        height: 500,
        width: 360


    },
    img2: {
        //    resizeMode:'contain',
        height:900,
        width: 300


    },


})