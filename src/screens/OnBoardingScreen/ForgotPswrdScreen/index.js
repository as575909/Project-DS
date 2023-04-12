// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { styles } from './index.style';

// const ForgotPasswordScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');

//   const handleSendOTP = () => {
//     auth().sendPasswordResetEmail(email)
//       .then(() => {
//         navigation.navigate('OtpScreen', { email });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reset Password?</Text>
//       <Text style={styles.subtitle}>Enter your email to receive an OTP to verify your email address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
//         <Text style={styles.buttonText}>Send OTP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };



// export default ForgotPasswordScreen;





import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { styles } from './index.style';

const ForgotPasswordScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    try {
      const withCountryCode = `+91${phoneNumber}`;
      console.log('with country code', withCountryCode);
      const confirmation = await auth().signInWithPhoneNumber(withCountryCode);
      console.log('confirmaton... here...', confirmation);
      setConfirm(confirmation);
      navigation.navigate('OtpScreen', {
        confirm: confirmation,
        phoneNumber,
      });
      // navigate to the OTP verification screen
    
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };


  // const handleSendOTP = async () => {
  //     auth().signInWithPhoneNumber(phoneNumber)
  //     .then((confirmationResult) => {
  //       navigation.navigate('OtpScreen', {
  //         confirmationResult,
  //       });
  //     })
  //     .catch((error) => {
  //       Alert.alert('Error', error.message);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password?</Text>
      <Text style={styles.subtitle}>Enter your phone number to reset your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;


