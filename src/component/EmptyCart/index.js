import { Image, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
// import emptyCart from '../assets/images/emptyCart.png';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../statics/Strings';
import { Images } from '../../assets/images';
import { styles } from './index.style';

const EmptyCart = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.main}>
            <Text style={styles.text}> You have no item in your cart </Text>
            <Image
                style={styles.empty}
                source={Images.emptyCart}
            />
            <Button
                onPress={() => navigation.navigate('Products')}
                title={Strings.CtnShp}
             
            />
         
        </View>
       
    )
}

export default EmptyCart

