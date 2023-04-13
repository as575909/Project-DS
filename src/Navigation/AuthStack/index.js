import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/OnBoardingScreen/WelcomeScreen';
import LoginScreen from '../../screens/OnBoardingScreen/LoginScreen';
import SignupScreen from '../../screens/OnBoardingScreen/SignupScreen';
import ForgotPasswordScreen from '../../screens/OnBoardingScreen/ForgotPswrdScreen';
import OTPScreen from '../../screens/OnBoardingScreen/OtpScreen';
import ResetPasswordScreen from '../../screens/OnBoardingScreen/ResetPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='welcomepage'>
      <Stack.Screen name='welcomepage' component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='signup' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ForgotPswrd' component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='OtpScreen' component={OTPScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ResetPswrdScreen' component={ResetPasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
