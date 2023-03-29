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
import colors from '../statics/styles/colors';
import Strings from '../statics/Strings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Products') {
                        iconName = 'list';
                    } else if (route.name === 'Mycart') {
                        iconName = 'cart-plus';
                    } else if (route.name === 'More') {
                        iconName = 'bars';
                    }

                    return <FontAwesome name={iconName} size={25} color="#4F4F4F" />;
                },
                tabBarActiveTintColor: colors.text1,
                tabBarInactiveTintColor: colors.text2,
                tabBarOptions: { showLabel: false },
            })}>

            <Tab.Screen name="Products" component={DrawerNav}
            options={{ headerShown: false, }}></Tab.Screen>

            <Tab.Screen name="Home" component={Home}
            options={{
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Itim-Regular",
                },
                headerTitle: "Home",
                headerTitleAlign: "center",
              }} />

            <Tab.Screen name="Mycart" component={CartScreen}
             options={{
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Itim-Regular",
                },
                headerTitleAlign: "center",
                
              }} />

            <Tab.Screen name="More" component= {Profile}
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