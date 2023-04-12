import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from '../screens/Products';
import Home from '../screens/Home';
import CartScreen from '../screens/CartScreen';
import MyCart from './DrawerNav';
import DrawerNav from './DrawerNav';
import HomeHeadNav from '../component/HomeHeadNav';
import Profile from '../screens/Profile';
import Strings from '../statics/Strings';
import colors from '../statics/styles/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Products') {
            iconName = 'list';
          } else if (route.name === 'Mycart') {
            iconName = 'cart-plus';
          } else if (route.name === 'More') {
            iconName = 'user';
          }

          return <FontAwesome name={iconName} size={25} color={focused ? colors.text1 : colors.black} />;
        },
        tabBarActiveTintColor: colors.text1,
        tabBarInactiveTintColor: colors.text2,
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarStyle: {
        //   position: 'absolute',
        //   bottom: 0,
        //   left: 10,
        //   right: 10,
        //   elevation: 0,
        //   backgroundColor: '#89CFF0',
        //   borderRadius: 15,
        //   height: 50,
        // }
      })}>

      <Tab.Screen name="Products" component={DrawerNav}
      ></Tab.Screen>

      {/* <Tab.Screen name="Home" component={Home}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitle: "Home",
          headerTitleAlign: "center",
         
        }} /> */}

      <Tab.Screen name="Mycart" component={CartScreen}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
         
        }} />

      <Tab.Screen name="More" component={Profile}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Itim-Regular",
          },
          headerTitleAlign: "center",
         
        }} />

    </Tab.Navigator>
    
  );
};

export default TabNavigator;