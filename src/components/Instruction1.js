import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'

const Instruction1 = () => {
  return (
    <View style={styles.mainview}>
        <View style={styles.textouter}>
        <Text style={styles.text1}>No Need To Login</Text>
        </View>
       
       <View>
       <Text style={styles.text2}>There is no need to login or register for using this application.</Text>
       </View>

        <TouchableOpacity style={styles.clickmain}>
                    <Text style={styles.clickbyutton}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Instruction1

const styles = StyleSheet.create({
    mainview:{
        backgroundColor:'#2c2c2c',
        flex:1,
        alignItems:'center',
        alignContent:'center',
    },
    text1:{
        color:'#140d1b',
        fontSize:40,
        fontFamily:'Roboto-Bold',
        marginTop:'20%',
        marginStart:'10%',
        fontWeight:'bold',
        padding:'8%',
    },

    textouter:{
        height:"30%",
        width:"60%",
        backgroundColor:'#d4b9fe',
        marginHorizontal:"10%",
        // marginVertical:'70%',
        marginTop:'50%',
        borderRadius:40,
        shadowColor:'black',
        shadowOpacity:'100%',
        borderRightColor:'grey',
        borderRightWidth:3,
        borderLeftColor:'white',
        borderLeftWidth:3,
        paddingHorizontal:'8%'



    },
    clickmain:{
        alignSelf:'center',
        height:50,
        width:200,
        borderColor:'#d4b9fe',
        borderRadius:10,
        borderWidth:2,
        alignItems:'center',
        marginTop:'20%',

    },

    clickbyutton:{
        fontSize:25,
        color:'#d4b9fe',
        fontWeight:'bold',
        marginTop:'5%'

    },
    text2:{
        fontSize:14,
        color:'white',
        marginTop:'10%',
        padding:'10%'
    },
})