import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import front from '../../../assets/images/front.jpg';
import { hr80 } from '../../../globals/style';
import { useNavigation } from '@react-navigation/native';
import {getData} from '../../../utils/asyncStorage';
import styles from '../../../statics/styles';
import TabNavigator from '../../../Navigation/BottomTab';
import { useTranslation } from "react-i18next";

const WelcomeScreen = ({ }) => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const retrieveData = async () => {
        try {
            const value = await getData('isLoggedIn' , (err, result) => {
                navigation.navigate(result != '1' ? 'signup' : TabNavigator)
                console.log(result);
              });
          
        } catch (error) {
            // Error retrieving data
            console.log("error")
        }
    };
    retrieveData();

    return (
        <View style={styles.welcome}>
            <Text style={styles.title}> {t("home_welcome")}{t("welcome_title")}</Text>
            <View style={styles.logoout}>
                <Image source={front} style={styles.logo} />
            </View>
            <View style={hr80} />
            <Text style={styles.text}>{t("welcome_tagline")}</Text>
            <View style={hr80} />

            <View style={styles.btnout}>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.btn}>{t("welcome_btn_signup")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.btn}>{t("welcome_btn_login")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WelcomeScreen;