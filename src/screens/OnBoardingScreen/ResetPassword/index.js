import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './index.style';

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
        secureTextEntry={true}
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
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






// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { styles } from './index.style';
// import { AsyncStorage } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';

// const ResetPasswordScreen = ({ navigation, email }) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  
//   const handleResetPassword = async () => {
//     if (password === confirmPassword) {
//       // Send password reset email using Firebase
//       try {
//         await firebase.auth().sendPasswordResetEmail(email);
//         alert('Password reset email sent!');
//         // Store new password in local storage
//         try {
//           await AsyncStorage.setItem('password', password);
//           alert('Password reset successfully!');
//           navigation.navigate('login');
//         } catch (error) {
//           alert('Failed to store new password: ' + error.message);
//         }
//       } catch (error) {
//         alert('Failed to send password reset email: ' + error.message);
//       }
//     } else {
//       alert('Passwords do not match. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reset Password</Text>
//       <Text style={styles.subtitle}>Enter your new password below:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         autoCapitalize="none"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry={true}
//         autoCapitalize="none"
//         value={confirmPassword}
//         onChangeText={(text) => setConfirmPassword(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
//         <Text style={styles.buttonText}>Reset Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ResetPasswordScreen;






