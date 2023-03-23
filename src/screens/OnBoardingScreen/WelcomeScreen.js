import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import front from '../../assets/images/front.jpg';
import { colors, hr80 } from '../../globals/style';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retrieveData} from '../../utils/asyncStorage';




const WelcomeScreen = ({ }) => {


    const navigation = useNavigation();
    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLoggedIn' , (err, result) => {
                navigation.navigate(result != '1' ? 'signup' : 'TabNavigator')
                console.log(result);
              });
          
        } catch (error) {
            // Error retrieving data
            console.log("error")
        }
    };

    retrieveData();

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome to InstaMart </Text>
            <View style={styles.logoout}>
                <Image source={front} style={styles.logo} />
            </View>
            <View style={hr80} />
            <Text style={styles.text}>Find the best items around you at lowest price.</Text>
            <View style={hr80} />


            <View style={styles.btnout}>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.btn}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.btn}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Itim-Regular",
    },
    title: {
        fontSize: 50,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: "Itim-Regular",
        // fontWeight: '200',
    },
    logoout: {
        width: '80%',
        height: '30%',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    text: {
        fontSize: 18,
        width: '80%',
        color: colors.text2,
        textAlign: 'center',
        fontFamily: "Itim-Regular",
    },
    btnout: {
        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
        // fontWeight: 700,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        fontFamily: "Itim-Regular",
    },
});

export default WelcomeScreen;