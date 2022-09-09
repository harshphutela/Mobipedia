import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const App = () => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.touchop1}>
                <Text style={styles.boxtext}>Welcome to</Text>
                <Text style={styles.boxtext2}>Mobipedia</Text>
                <Text style={styles.boxtext3}>A Complete Wikipedia of Mobile Phones</Text>
            </TouchableOpacity>
        
            
                <Text style={styles.text4}>Click to proceed with basic instructions.</Text>    
                <TouchableOpacity style={styles.clickmain}>
                    <Text style={styles.clickbyutton}>-{'>'}</Text>
                </TouchableOpacity>

                <Text style={styles.text4}>or you may skip</Text>

                <TouchableOpacity style={styles.clickmain2}>
                    <Text style={styles.clickbyutton2}>SKIP</Text>
                </TouchableOpacity>



            <ImageBackground style={styles.img} source={require('../imagedata/circle.png')}>

            </ImageBackground>
        </View>

    )
}

export default App

const styles = StyleSheet.create({

    main: {
        backgroundColor: '#2c2c2c',

        flex: 1,

    },
    box: {
        backgroundColor: '#28e9e7',
        alignSelf: 'center',
        // marginHorizontal:'20%',
        // marginVertical:'100%',
        // height:100,

    },

    boxtext: {
        color: 'white',
        fontFamily: 'Roboto-Medium',
        fontSize: 55,
        fontWeight: 'bold',
        marginTop: '20%',
        marginLeft: '8%'

    },

    boxtext2: {
        color: "white", //"#e99a30"
        marginLeft: '8%',
        fontFamily: 'Roboto-Medium',
        fontSize: 55,
        fontWeight: 'bold',
    },

    boxtext3: {
        color: "grey", //"#e99a30"
        marginTop: '2%',
        marginLeft: '8%',
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        fontWeight: 'normal',
    },

    img: {
        height: '90%',
        marginTop:0,

    },

    clickmain:{
        marginTop:'5%',
        alignSelf:'center',
        backgroundColor:'white',
        height:50,
        width:50,
        borderColor:'white',
        borderRadius:100,
        alignItems:'center',

    },

    clickbyutton:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        marginTop:10

    },

    text4:{
        color:'white',
        fontSize:14,
        fontWeight:'300',
        marginTop:35,
        alignSelf:'center'
    },

    touchop1:{
        paddingBottom:30,
    },
    clickbyutton2:{
        fontSize:14,
        color:'black',
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold',

    },

    clickmain2:{
        marginTop:'5%',
        alignSelf:'center',
        backgroundColor:'white',
        height:50,
        width:50,
        borderColor:'white',
        borderRadius:100,
        alignItems:'center',

    }

})