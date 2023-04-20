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

const Drawer = createDrawerNavigator();

function DrawerNav() {
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
      <Drawer.Screen name={Strings.welcome_title} component={Products}
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

      <Drawer.Screen name="Location" component={LocationComponent}
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

      <Drawer.Screen name="MyCart" component={CartScreen}
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

      <Drawer.Screen name="UserData" component={UserData}
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

      <Drawer.Screen name="About" component={About}
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

      <Drawer.Screen name="ContactUs" component={Contact}
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

      <Drawer.Screen name="Settings" component={Settings}
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

      {/* <Drawer.Screen name="Tab" component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: moderateScale(25),
            fontFamily: Strings.FontFamily,
          },
          headerTitleAlign: "center",
        }} /> */}


    </Drawer.Navigator>




  );
}

export default DrawerNav;