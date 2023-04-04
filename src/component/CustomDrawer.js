import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { DrawerActions } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import styles from '../statics/styles';
import bgdrawer from '../../assets/images/bgdrawer.jpg';
import manAvatar from '../../assets/images/manAvatar.jpg';
import Strings from '../statics/Strings';
import colors from '../statics/styles/colors';

const CustomDrawer = (props) => {
    const userName = useSelector((state) => state.user);
    console.log(userName.data[0].Name,"jkl");
  return (
    <View style={styles.containerCustomDrawer}>
    <DrawerContentScrollView 
    {...props}
    contentContainerStyle={{backgroundColor:'#89CFF0'}}>

        <ImageBackground source={bgdrawer} style={styles.imgbg}>
        <Image source={manAvatar} style={styles.avatar} />
        <Text style={styles.user}>{Strings.Welcome}, {userName.data[0].Name}</Text>
        <View style={styles.coinContainer}>
        <Text style={styles.coins}>Rewards</Text>
        <FontAwesome5 name='coins' size={14} color= {colors.yellow} />
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
