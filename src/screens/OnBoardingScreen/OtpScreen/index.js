import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import OTPInput from 'react-native-otp-forminput';
import { showMessage } from 'react-native-flash-message';
import { styles } from './index.style';
import { useSelector } from 'react-redux';
import colors from '../../../statics/styles/colors';
import MyText from '../../../component/MyText';
import MyButton from '../../../component/MyButton';
import Strings from '../../../statics/Strings';

const OTPScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const confirm = useSelector((state) => state.confirm);
  const Code_Length = 6;
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1);
      if(timer === 0){
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

//   let timeLeft = 60;

// const countdown = setInterval(() => {
//   timeLeft--;
//   console.log(timeLeft); // You can replace this with any code to display the countdown
//   if (timeLeft === 0) {
//     clearInterval(countdown);
//   }
// }, 1000);

  const handleVerifyCode = async () => {
    try {
      Alert.alert('Success','OTP verified successfully');
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
      <MyText style={styles.title}>{Strings.otp_title1}</MyText>
      <MyText style={styles.subtitle}>{Strings.otp_title2}</MyText>

      <View style={styles.input}>
        <OTPInput
          type="outline"
          onChange={setCode}
          numberOfInputs={Code_Length}
          inputStyle={styles.otp}
        />
      </View>
      <MyButton onPress={handleVerifyCode} text={Strings.otp_verify_btn} />

      <View style={styles.resendContainer}>
        <Text style={styles.subtitle}>{Strings.otp_subtitle_text1} {timer} {Strings.otp_subtitle_text2}</Text>
        {timer == 0 && (
          <MyButton onPress={handleResendOTP} text='Resend OTP' />
        )}
      </View>
    </View>
  );
};

export default OTPScreen;

