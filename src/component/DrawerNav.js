import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import CartScreen from '../screens/CartScreen';
import Home from '../screens/Home';


const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
     
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="cart" component={CartScreen} />
      </Drawer.Navigator>
     
  );
}

export default DrawerNav;