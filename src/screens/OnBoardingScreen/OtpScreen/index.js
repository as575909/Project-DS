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
import { useTranslation } from "react-i18next";

const OTPScreen = ({ route, navigation }) => {
  const {t} = useTranslation();
  const { confirm, phoneNumber } = route.params;
  // const confirm = useSelector((state) => state.confirm);
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
   
  }, []);


  const handleVerifyCode = async () => {
    try {
      // Alert.alert('Success','OTP verified successfully');
      // navigation.navigate('ResetPswrdScreen');
      console.log(Object.keys(confirm), "hiii")
     
      await confirm.confirm(code);
      Alert.alert('Success','OTP verified successfully');
      showMessage({
        message: 'Verification successful!',
        type: 'success',
      });
      console.log('Verification successful!');
      navigation.navigate('ResetPswrdScreen',{
        params: {phoneNumber},
      });
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
      <MyText style={styles.title}>{t("otp_title1")}</MyText>
      <MyText style={styles.subtitle}>{t("otp_title2")}</MyText>

      <View style={styles.input}>
        <OTPInput
          type="outline"
          onChange={setCode}
          numberOfInputs={Code_Length}
          inputStyle={styles.otp}
        />
      </View>
      <MyButton onPress={handleVerifyCode} text={t("otp_verify_btn")} />

      <View style={styles.resendContainer}>
        <Text style={styles.subtitle}>{t("otp_subtitle_text1")} {timer} {t("otp_subtitle_text2")}</Text>
        {timer == 0 && (
          <MyButton onPress={handleResendOTP} text='Resend OTP' />
        )}
      </View>
    </View>
  );
};

export default OTPScreen;

