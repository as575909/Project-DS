import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import CartScreen from '../screens/CartScreen';
import DrawerNav from './DrawerNav';
import Profile from '../screens/Profile';
import Strings from '../statics/Strings';
import colors from '../statics/styles/colors';
import Products from '../screens/Products';
import { useSelector } from 'react-redux';
import styles from '../statics/styles';
import { CartIconWithBadge } from '../component/CartIconWithBadge';
import About from '../screens/About';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const myCartItems = useSelector((state) => state.cart);
  const total = myCartItems.length;
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
       
      })}>

      <Tab.Screen name="Products" component={DrawerNav}></Tab.Screen>

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
        options={() => ({
          tabBarBadge: total || null,
          tabBarBadgeStyle: styles.badge,
        })}
        />

      <Tab.Screen name="More" component={About}
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