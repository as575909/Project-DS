// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text } from 'react-native';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
// import CountDown from 'react-native-countdown-component';
// import auth from '@react-native-firebase/auth';

// const OTPScreen = () => {
//     const [otp, setOtp] = useState('');

//     const verifyOTP = async () => {
//         try {
//             const credential = firebase.auth.PhoneAuthProvider.credential(otp);
//             await auth().signInWithCredential(credential);
//             console.log('Authentication successful');
//         } catch (err) {
//             console.log('Authentication failed', err);
//         }
//     };

//     return (
//         <View style={{ alignItems: 'center' }}>
//             <OTPInputView
//                 style={{ width: '80%', height: 200 }}
//                 pinCount={6}
//                 onCodeChanged={code => setOtp(code)}
//                 autoFocusOnLoad
//                 codeInputFieldStyle={{ borderRadius: 5, backgroundColor: '#fff', borderWidth: 1 }}
//                 codeInputHighlightStyle={{ borderColor: '#03DAC6' }}
//             />
          
//             <CountDown
//                 until={60}
//                 size={20}
//                 onFinish={() => console.log('Countdown finished')}
//                 digitStyle={{ backgroundColor: '#03DAC6' }}
//                 digitTxtStyle={{ color: '#fff' }}
//                 timeToShow={['S']}
//                 timeLabels={{ s: null }}
//                 showSeparator
//                 separatorStyle={{ color: '#fff' }}
//             />
//             <TouchableOpacity onPress={verifyOTP}>
//                 <Text style={{ color: '#03DAC6', fontSize: 18 }}>Verify OTP</Text>
//             </TouchableOpacity>
//             <View id="recaptcha-container" />
//         </View>
//     );
// };

// export default OTPScreen;






import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './index.style';

const OTPScreen = ({ navigation, route }) => {
  const [otp, setOTP] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleVerifyOTP = () => {
    // Verify OTP logic here
    if (otp === '1234') { // Replace with actual OTP verification logic
      setSuccess(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter the OTP sent to entered mail </Text>
      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        autoCapitalize="none"
        value={otp}
        onChangeText={(text) => setOTP(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      {success && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>OTP verified successfully!</Text>
          <TouchableOpacity style={styles.resetButton} onPress={() => navigation.navigate('ResetPswrdScreen')}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};



export default OTPScreen;
