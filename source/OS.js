import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

export default function MainHome(props) {

    return (
        <ScrollView style={styles.main}>

            <View >
                <Text style={styles.headtext}>Which <Text style={{color:'#32de84', fontWeight:'900'}}>Operating System </Text>you are looking for?</Text>
            </View>

           <TouchableOpacity onPress={()=>props.navigation.navigate("AndroidRange")}>
            <View style={{borderWidth:5,borderColor:'white',borderRadius:15 ,width:'60%',height:150, backgroundColor:'white',alignSelf:'center',marginBottom: '5%',}}>
            <Image style={styles.img1} source={require('./image/android.png')} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.navigate('iosFront')}>
            <View style={{borderWidth:5,borderColor:'white',borderRadius:15 ,width:'60%',height:150, backgroundColor:'white',alignSelf:'center',marginTop:'10%'}}>
            <Image style={styles.img2} source={require('./image/ios.png')} />
            </View>
            </TouchableOpacity>

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
        marginBottom: '10%',
    },
    topacity: {

    },

    img1: {
        height: 80,
        marginTop:'15%',
        alignSelf: 'center',
        // backgroundColor: 'white',
        resizeMode:'contain',
    },

    img2: {
        height: 90,
        marginTop:'10%',
        alignSelf: 'center',
        // backgroundColor: 'white',
        resizeMode:'contain',
    },
})