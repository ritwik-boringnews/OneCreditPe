import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Cashbook = () => {
    const styles = StyleSheet.create({
        container: {
        paddingHorizontal: 20,
            flex: 1,
            backgroundColor: '#E8EEFF',
            paddingVertical: 15,
        },
        card: {
            width: '100%',
            backgroundColor: '#fff',
            paddingTop: 10,
            borderRadius: 10,
        },
        cardBody:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        boxOne: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
            paddingVertical: 30,
            borderRightWidth: 2, 
            borderColor: '#ccc'
            
        },
        box: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
            paddingVertical: 30,

        },
        cardBtn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'dodgerblue',
            paddingVertical: 6,
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        }
    });
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={styles.boxOne}>
                            <Text style={{fontSize: 24, color:'#1790FF', fontWeight: 'bold', fontFamily: 'Roboto'}}>₹ 0</Text>
                            <Text style={{color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto'}}>Cash In Hand</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={{fontSize: 24, color:'#12CE12', fontWeight: 'bold', fontFamily: 'Roboto'}}>₹ 0</Text>
                            <Text style={{color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto'}}>Cash In Hand</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cardBtn}>
                        <Text style={{fontSize: 14,color: '#fff', fontWeight: '700', marginRight: 12, fontFamily: 'Poppins'
                    }}>View Report</Text>
                        <Icon name="doubleright" color={'#fff'} style={styles.icon} size={16} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Cashbook;