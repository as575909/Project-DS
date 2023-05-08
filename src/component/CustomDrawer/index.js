import { ImageBackground, Text, View, TouchableOpacity, Alert, Linking } from 'react-native';
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
import { useTranslation } from "react-i18next";

const CustomDrawer = (props) => {
    const {t} = useTranslation();
    const referralCode = "A12B64D";
    const message = `Use my referral code ${referralCode} to get a discount!`;
    const shareReferralCode = () => {
        Linking.openURL(`whatsapp://send?text=${message}`);
      };

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
        <MyText style={styles.user}>{t("home_welcome")}, {userName.data[0].Name}</MyText>
        <MyText style={styles.user}>{t("customdrawer_title")}</MyText>
        </TouchableOpacity>
        </ImageBackground>

        <View style={styles.list}>
        <DrawerItemList {...props} />
        </View>

    </DrawerContentScrollView>
    <View style={styles.footer}>
        <TouchableOpacity onPress={shareReferralCode} style={styles.share}>
            <View style={styles.shareIcon}>
        <Ionicons name='share-social-outline' size={22} />
        <Text style={styles.refer}> {t("customdrawer_referfriend_txt")} </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => Alert.alert(
            'LogOut',
            t("LogoutTxt"),
            [
                { text: t("Cancel"), onPress: () => { props.navigation.dispatch(DrawerActions.closeDrawer()) } },
                {
                    text: t("confirm_txt"), onPress: () => {
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
        <Text style={styles.refer}> {t("logout_btn")} </Text>
        </View>
        </TouchableOpacity>

    </View>
    </View>
  )
}

export default CustomDrawer
