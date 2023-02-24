import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Course from '../screens/Course';
import Home from '../screens/Home';
import CartScreen from '../screens/CartScreen';
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Courses') {
                        iconName = 'list';
                    } else if (route.name === 'My Cart') {
                        iconName = 'cart-plus';
                    } else if (route.name === 'More') {
                        iconName = 'bars';
                    }

                    return <FontAwesome name={iconName} size={25} color="#4F4F4F" />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey',
                tabBarOptions: { showLabel: false },
            })}>

            <Tab.Screen name="Home" component={DrawerNav}
            options={{ headerShown: false, }}></Tab.Screen>

            <Tab.Screen name="Courses" component={Course}
            options={{
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Itim-Regular",
                },
                headerTitle: "Courses",
                headerTitleAlign: "center",
              }} />

            <Tab.Screen name="My Cart" component={CartScreen}
             options={{
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Itim-Regular",
                },
                headerTitleAlign: "center",
              }} />

            <Tab.Screen name="More" component= {DrawerNav}
            options={{
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Itim-Regular",
                },
                headerTitleAlign: "center",
                headerShown: false,
              }} />

        </Tab.Navigator>

    );
};

export default TabNavigator;