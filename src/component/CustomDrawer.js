import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { DrawerActions } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { logout } from '../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
    <DrawerContentScrollView 
    {...props}
    contentContainerStyle={{backgroundColor:'#89CFF0'}}>

        <ImageBackground source={require('../assets/images/bgdrawer.jpg')} style={styles.imgbg}>
        <Image source={require('../assets/images/manAvatar.jpg')} style={styles.avatar} />
        <Text style={styles.user}>@User</Text>
        <View style={styles.coinContainer}>
        <Text style={styles.coins}>200 Coins</Text>
        <FontAwesome5 name='coins' size={14} color='yellow' />
        </View>
        </ImageBackground>

        <View style={styles.list}>
        <DrawerItemList {...props} />
        </View>

    </DrawerContentScrollView>
    <View style={styles.footer}>
        <TouchableOpacity onPress={()=>{}} style={styles.share}>
            <View style={styles.shareIcon}>
        <Ionicons name='share-social-outline' size={22} />
        <Text style={styles.refer}> Refer A Friend </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => Alert.alert(
            'LogOut',
            'Do you want to LogOut',
            [
                { text: 'Cancel', onPress: () => { props.navigation.dispatch(DrawerActions.closeDrawer()) } },
                {
                    text: 'Confirm', onPress: () => {
                        {
                            AsyncStorage.clear();
                            props.navigation.navigate('login')
                        }
                    }
                }
            ],
        )
        } 
        //onPress={()=>{}}
        style={styles.share}>
            <View style={styles.shareIcon}>
        <Ionicons name='exit-outline' size={22} />
        <Text style={styles.refer}> Logout </Text>
        </View>
        </TouchableOpacity>

    </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imgbg: {
        padding: 10,
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
        
    },
    user:{
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Itim-Regular',
    },
    coins: {
        color: '#fff',
        fontFamily: 'Itim-Regular',
        marginRight: 5,
    },
    coinContainer: {
        flexDirection: 'row',
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    share: {
        paddingVertical: 15,
    },
    shareIcon: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    refer: {
        fontSize: 15,
        fontFamily: 'Itim-Regular',
        marginLeft: 10,

    }
})