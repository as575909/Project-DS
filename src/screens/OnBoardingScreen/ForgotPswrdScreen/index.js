import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { styles } from './index.style';
import { useDispatch } from 'react-redux';
//import { setConfirm, setNumber } from '../../../redux/reducers/ConfirmReducer';
import colors from '../../../statics/styles/colors';
import MyText from '../../../component/MyText';
import MyTextInput from '../../../component/MyTextInput';
import MyButton from '../../../component/MyButton';
import { useTranslation } from "react-i18next";

const ForgotPasswordScreen = ({ route, navigation }) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

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
  return (
    <View style={styles.container}>
      <MyText style={styles.title}>{t("forgot_title1")}</MyText>
      <MyText style={styles.subtitle}>{t("forgot_title2")}</MyText>
      <MyTextInput
        style={styles.input}
        placeholder={t("sigunup_mob_placeholder")}
        placeholderTextColor={colors.text3}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <MyButton onPress={handleSendOTP} text={t("forgot_sendOtp_btn")} />
    </View>
  );
};

export default ForgotPasswordScreen;


