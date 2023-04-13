import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import TabNavigator from './BottomTab';
import ProductDetails from '../screens/ProductDetails';
import DrawerNav from './DrawerNav';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName='AuthStack'>
      
        <Stack.Screen name='AuthStack' component={AuthStack} options={{ headerShown: false }} /> 
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='AppStack' component={AppStack} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetails' component={ProductDetails}
          options={{
            headerTitleStyle: { fontSize: 25, fontFamily: 'Itim-Regular' },
            headerTitleAlign: 'center'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;