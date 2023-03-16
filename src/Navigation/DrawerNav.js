import React from 'react';
import {Button, AsyncStorage} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import CartScreen from '../screens/CartScreen';
import Home from '../screens/Home';
import UserData from '../screens/UserData';
import About from '../screens/About';
import Contact from '../screens/Contact';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions } from "@react-navigation/native";


const Drawer = createDrawerNavigator();


<Button onPress={logout} title="Logout" />

const logout = async () => {
  await  AsyncStorage.clear();
  props.naviagtion.navigate('LoginScreen');
}

function DrawerNav() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="EduoSkill" component={Home}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",

        }} />

      <Drawer.Screen name="My Cart" component={CartScreen}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="UserData" component={UserData}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="About" component={About}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="ContactUs" component={Contact}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
        }} />

      <Drawer.Screen name="Profile" component={Profile}
        options={{
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