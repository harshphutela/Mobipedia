import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MainHome() {
    const cateo = [
        {
            brand: 'Android',
        },
        {
            brand: 'iOS',
        },
    ]
    return (
        <View style={styles.main} >

            <View >
                <Text style={styles.headtext}> Which OS do you prefer?</Text>
            </View>
            <FlatList
                data={cateo}
                renderItem={(props) => {
                    return (
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={styles.topacity}>
                                <Text style={styles.totext}>
                                
                                    {props.item.brand}
                                </Text>

                            </TouchableOpacity>

                        </View>
                    )
                }} />
        </View>


    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#2c2c2c',
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',

    },

    headtext: {
        color: 'white',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: '10%',
        borderColor: 'white',
        borderWidth: 2,
        padding: "10%",
        marginBottom: '20%',
    },
    topacity: {
        flex: 1,
        alignContent: 'flex-start'
    },
    totext: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
        backgroundColor: 'white',

        fontSize: 50,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: '10%',
        paddingVertical: '20%',
        width: '100%'
    }
})