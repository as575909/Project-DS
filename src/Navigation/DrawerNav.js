import React from 'react';
import { Button, AsyncStorage } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import CartScreen from '../screens/CartScreen';
import Home from '../screens/Home';
import UserData from '../screens/UserData';
import About from '../screens/About';
import Contact from '../screens/Contact';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions } from "@react-navigation/native";
import { logout } from '../utils/asyncStorage';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily: 'Itim-Regular',
        }
      }}
    >
      <Drawer.Screen name="InstaMart" component={Products}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='list-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",

        }} />

      <Drawer.Screen name="Home" component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='home-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",

        }} />

      <Drawer.Screen name="MyCart" component={CartScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='cart-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="UserData" component={UserData}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='pricetags-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="About" component={About}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="ContactUs" component={Contact}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='chatbox-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

    </Drawer.Navigator>


  );
}

export default DrawerNav;