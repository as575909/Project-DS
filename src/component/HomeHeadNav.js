import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../globals/style';
import { useNavigation } from '@react-navigation/native';
import DrawerNav from './DrawerNav';

const HomeHeadNav = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DrawerNav />
      {/* <TouchableOpacity  onPress={() => navigation.navigate('DrawerNav')}>
        <Icon name="bars" size={24} color='black' style={styles.myicon} />
        </TouchableOpacity> */}
        <TextInput placeholder='Search' style={styles.mytext}></TextInput>

      <TouchableOpacity onPress={() => navigation.navigate('cart')} style={styles.containerin}>
        <Icon name="cart-plus" size={30} color='black' style={styles.myicon} />
      </TouchableOpacity>
      
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    myicon: {
        //color: colors.text1,
        paddingRight: 5,
        
    },
    mytext: {
        color: colors.text1,
        fontSize: 24,
        fontFamily: "Itim-Regular",
        width: '80%',
        paddingLeft: 10,
       
    },
})

export default HomeHeadNav;