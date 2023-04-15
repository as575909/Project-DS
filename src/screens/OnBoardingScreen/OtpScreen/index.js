// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text } from 'react-native';
// //import OTPInputView from '@twotalltotems/react-native-otp-input';
// import OTPInputField from '../../../component/OtpInput';
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
//             <OTPInputField
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






// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { styles } from './index.style';
// import auth from '@react-native-firebase/auth';

// const OTPScreen = ({ props, navigation, route }) => {
//     const [otp, setOTP] = useState('');
//     // const [code, setCode] = useState("");
//     const [success, setSuccess] = useState(false);

//     const { confirm } = props.route.params;
//     console.log(confirm, "otp confirmation")
//     const { PhoneNum } = props.route.params;
//     console.log(PhoneNum, "Phone Number")

//     //   const handleVerifyOTP = () => {
//     //     // Verify OTP logic here
//     //     if (otp === '1234') { // Replace with actual OTP verification logic
//     //       setSuccess(true);
//     //     } else {
//     //       alert('Invalid OTP. Please try again.');
//     //     }
//     //   };

//     // const verifyOTP = async () => {
//     //     try {
//     //         const credential = auth.PhoneAuthProvider.credential(otp);
//     //         await auth().signInWithCredential(credential);
//     //         setSuccess(true);
//     //         console.log('Authentication successful');
//     //     } catch (err) {
//     //         console.log('Authentication failed', err);
//     //     }
//     // };

//     const confirmCode = async () => {
//         if (otp) {
//             try {
//                 //console.log(confirm.confirm(code), "code is here ")
//                 console.log(Object.keys(confirm), "hiii")
//                 await confirm.confirm(otp);
//                 navigation.navigate('ResetPswrdScreen', {
//                     PhoneNum
//                 })
//             } catch (error) {
//                 alert('Invalid OTP')
//                 console.log("error", error)
//             }
//         } else {
//             alert("Please enter OTP")
//         }
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Verify OTP</Text>
//             <Text style={styles.subtitle}>Enter the OTP sent to entered mail </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="OTP"
//                 keyboardType="numeric"
//                 autoCapitalize="none"
//                 value={otp}
//                 onChangeText={(text) => setOTP(text)}
//             />
//             <TouchableOpacity style={styles.button} onPress={confirmCode}>
//                 <Text style={styles.buttonText}>Verify OTP</Text>
//             </TouchableOpacity>
//             {/* {success && (
//                 <View style={styles.successContainer}>
//                     <Text style={styles.successText}>OTP verified successfully!</Text>
//                     <TouchableOpacity style={styles.resetButton} onPress={() => navigation.navigate('ResetPswrdScreen')}>
//                         <Text style={styles.buttonText}>Reset Password</Text>
//                     </TouchableOpacity>
//                 </View>
//             )} */}
//         </View>
//     );
// };



// export default OTPScreen;








import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { styles } from './index.style';
import { useSelector } from 'react-redux';
import colors from '../../../statics/styles/colors';

const OTPScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const confirm = useSelector((state) => state.confirm);

  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerifyCode = async () => {
    try {
      navigation.navigate('ResetPswrdScreen');
      await confirm.confirm(code);
      showMessage({
        message: 'Verification successful!',
        type: 'success',
      });
      console.log('Verification successful!');
      navigation.navigate('ResetPswrdScreen');
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };

  const handleResendOTP = async () => {
    try {
      const withCountryCode = `+91${phoneNumber}`;
      const confirmation = await auth().signInWithPhoneNumber(withCountryCode);
      setConfirm(confirmation);
      setTimer(60);
      showMessage({
        message: 'OTP has been sent again!',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>Please enter the OTP sent to your phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor={colors.text3}
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <View style={styles.resendContainer}>
        <Text style={styles.subtitle}>Didn't receive OTP? Resend in {timer} seconds</Text>
        {timer == 0 && (
          <TouchableOpacity style={styles.button} onPress={handleResendOTP}>
            <Text style={styles.buttonText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OTPScreen;

