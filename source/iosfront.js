import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

export default function MainHome(props) {

    return (
        <ScrollView style={styles.main}>

            <View style={{ backgroundColor: 'white', marginTop: '4%' }}>
                {/* <Text style={styles.headtext}> iOS Store</Text> */}
                <Image style={{ height: 80, width: '30%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center' }} source={require('./image/iphone.png')} />
            </View>

            <View>
                <Text style={styles.headtext}>Which iPhone is right for you ?</Text>
            </View>

            <View style={{}}>
                <TouchableOpacity style={styles.topacity} onPress={()=>props.navigation.navigate('SE')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, backgroundColor: 'white', alignSelf: 'center', marginBottom: '2%' }}>
                        <Image style={styles.img1} source={require('./image/SE.png')} />
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{}}>
                <TouchableOpacity style={styles.topacity} onPress={()=>props.navigation.navigate('12')} >
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, backgroundColor: 'white', alignSelf: 'center', marginBottom: '2%' }}>
                        <Image style={styles.img1} source={require('./image/12.png')} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <TouchableOpacity style={styles.topacity} onPress={()=>props.navigation.navigate('13')} >
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, backgroundColor: 'white', alignSelf: 'center', marginBottom: '2%' }}>
                        <Image style={styles.img1} source={require('./image/13.png')} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <TouchableOpacity style={styles.topacity} onPress={()=>props.navigation.navigate('13pro')}>
                    <View style={{ borderWidth: 5, borderColor: 'white', borderRadius: 15, backgroundColor: 'white', alignSelf: 'center', marginBottom: '2%' }}>
                        <Image style={styles.img1} source={require('./image/13pro.png')} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* 
            <TouchableOpacity onPress={()=>props.navigation.navigate('iosFront')}>
            <View style={{borderWidth:5,borderColor:'white',borderRadius:15 ,width:'60%',height:150, backgroundColor:'white',alignSelf:'center',marginTop:'10%'}}>
            <Image style={styles.img2} source={require('./image/ios.png')} />
            </View>
            </TouchableOpacity> */}

        </ScrollView>


    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#2c2c2c',

    },

    headtext: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: '10%',
    },
    topacity: {
        marginTop:'1%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',

    },

    img1: {
        height: '80%',
        // backgroundColor: 'white',
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 30,
        width:300

    },


})