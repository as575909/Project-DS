import { ImageBackground, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { DrawerActions } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearAll } from '../../utils/asyncStorage';
import { useSelector } from 'react-redux';
import bgdrawer from '../../assets/images/bgdrawer.jpg';
import Strings from '../../statics/Strings';
import { styles } from './index.style';
import UserAvatar from '../UserAvatar';
import { Images, webImgs } from "../../assets/images";
import MyText from '../MyText';

const CustomDrawer = (props) => {

    const userName = useSelector((state) => state.user);
    //console.log(userName.data[0].Name,"jkl");
  return (
    <View style={styles.containerCustomDrawer}>
    <DrawerContentScrollView 
    {...props}
    contentContainerStyle={{backgroundColor:'#89CFF0'}}>

        <ImageBackground source={bgdrawer} style={styles.imgbg}>
         <TouchableOpacity onPress={()=> props.navigation.navigate('About') }>   
         <UserAvatar userImg= {webImgs.avatarMale} />
        <MyText style={styles.user}>{Strings.home_welcome}, {userName.data[0].Name}</MyText>
        <MyText style={styles.user}>Android Developer</MyText>
        </TouchableOpacity>
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
