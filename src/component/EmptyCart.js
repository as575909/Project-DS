import { Image, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { responsiveScreenFontSize, responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import emptyCart from '../assets/images/emptyCart.png';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Strings from '../statics/Strings';
import colors from '../statics/styles/colors';

const EmptyCart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <Text style={styles.text}> You have no item in your cart </Text>
            <Image
                style={styles.empty}
                source={emptyCart}
            />
            <Button
                onPress={() => navigation.navigate('Products')}
                title={Strings.CtnShp}
             
            />
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        paddingTop: moderateScale(100),
        fontSize: responsiveScreenFontSize(3),
        justifyContent: 'center',
    },
    text: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Itim-Regular',
    },
    empty: {
        width: responsiveWidth(50),
        height: responsiveHeight(30),
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(3),
        borderRadius: responsiveWidth(4),
    },
 

})