import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './index.style';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  
  const handleSendOTP = () => {
    auth().sendPasswordResetEmail(email)
      .then(() => {
        navigation.navigate('OtpScreen', { email });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password?</Text>
      <Text style={styles.subtitle}>Enter your email to receive an OTP to verify your email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ForgotPasswordScreen;

