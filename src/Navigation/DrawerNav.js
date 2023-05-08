import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import CartScreen from '../screens/CartScreen';
import Home from '../screens/Home';
import LocationComponent from '../component/Location';
import UserData from '../screens/UserData';
import About from '../screens/About';
import Contact from '../screens/Contact';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../statics/styles/colors';
import Strings from '../statics/Strings';
import { moderateScale } from 'react-native-size-matters';
import TabNavigator from './BottomTab';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';
import { useTranslation } from "react-i18next";

const Drawer = createDrawerNavigator();

function DrawerNav() {
  const {t} = useTranslation();
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: colors.drvoilet,
        drawerActiveTintColor: colors.col1,
        drawerInactiveTintColor: colors.drcg,

        // drawerStyle: {
        //   position: 'absolute',
        // },
        drawerLabelStyle: {
          marginLeft: moderateScale(-15),
          fontFamily: 'Itim-Regular',
        }
      }}
    >
      <Drawer.Screen name={t("welcome_title")} component={Products}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='list-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
          headerShown: false,
        }} />

      <Drawer.Screen name={t("location_drawer_title")} component={LocationComponent}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='location-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",

        }} />

      <Drawer.Screen name={t("mycart_drawer_title")} component={CartScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='cart-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
          headerShown: false,
        }} />

      <Drawer.Screen name={t("userdata_drawer_title")} component={UserData}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='pricetags-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name={t("about_drawer_title")} component={About}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name={t("contactus_drawer_title")} component={Contact}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='chatbox-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name={t("settings_drawer_title")} component={Settings}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} />

      {/* <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} /> */}

      <Drawer.Screen name={t("editprofile_drawer_title")} component={EditProfile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} />


    </Drawer.Navigator>




  );
}

export default DrawerNav;