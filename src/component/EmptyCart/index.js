import { Image, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../assets/images';
import { styles } from './index.style';
import { useTranslation } from "react-i18next";

const EmptyCart = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    
    return (
        <View style={styles.main}>
            <Text style={styles.text}> {t("cart_emptycart_title")} </Text>
            <Image
                style={styles.empty}
                source={Images.emptyCart}
            />
            <Button
                onPress={() => navigation.navigate('InstaMart')}
                title={t("CtnShp")}
             
            />
         
        </View>
       
    )
}

export default EmptyCart

