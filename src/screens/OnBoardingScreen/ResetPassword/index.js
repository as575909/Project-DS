import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './index.style';
import colors from '../../../statics/styles/colors';


const ResetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleResetPassword = () => {
    // Password reset logic here
    if (password === confirmPassword) {
      // Replace with actual password reset logic (e.g. using Firebase)
      // Store new password in local storage or database
      // ...
      alert('Password reset successfully!');
      navigation.navigate('login');
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Enter your new password below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.text3}
        secureTextEntry={true}
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={colors.text3}
        secureTextEntry={true}
        autoCapitalize="none"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ResetPasswordScreen;









