import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Products from '../../screens/Products';
import ProductDetails from '../../screens/ProductDetails';
import About from '../../screens/About';
import Contact from '../../screens/Contact';
import UserData from '../../screens/UserData';
import CartScreen from '../../screens/CartScreen';
import TabNavigator from '../BottomTab';
import colors from '../../statics/styles/colors';
import DrawerNav from '../DrawerNav';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DrawerNav' component={DrawerNav} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} /> 
            <Stack.Screen name='Products' component={Products} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductDetails}
                options={{
                    headerTitleStyle: { fontSize: 25, fontFamily: 'Itim-Regular' },
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
            <Stack.Screen name='Contact' component={Contact} options={{ headerShown: false }} />
            <Stack.Screen name='UserData' component={UserData} options={{ headerShown: false }} />
            <Stack.Screen name='cart' component={CartScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

export default AppStack;
