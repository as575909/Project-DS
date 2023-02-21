import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screens/Profile';
import CartScreen from '../screens/CartScreen';

// function Open(props)
// {
//   return (
//     <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
//         <Icon name="bars" size={24} color='black' style={styles.myicon} />
//         </TouchableOpacity>
//   );
// }

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="cart" component={CartScreen} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default DrawerNav;