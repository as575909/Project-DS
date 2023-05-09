import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { btn1, hr80 } from '../../../globals/style';
import { useDispatch } from 'react-redux';
import { adduser } from '../../../redux/reducers/LoginReducer';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../statics/Strings';
import { isValidEmail, isValidPhone, isValidPassword } from '../../../utils/regex';
import { onBackPress } from '../../../utils/backPressHandler';
import { handleBackPress } from '../../../component/Alert';
import InputWithIcon from '../../../component/InputWithIcon';
import { styles } from './index.style';
import CustomButton from '../../../component/CustomButton';
import MyText from '../../../component/MyText';
import colors from '../../../statics/styles/colors';
import { useTranslation } from "react-i18next";

const SignupScreen = ({ }) => {
    const {t} = useTranslation();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState("");
    const [chEmail, setchEmail] = useState("true");
    const [errEmail, seterrEmail] = useState("");
    const [rePassword, resetPassword] = useState("");
    const [chrePassword, setchrePassword] = useState("true");
    const [errRePassword, seterrRePassword] = useState("");
    const [Password, setPassword] = useState("");
    const [chPassword, setchPassword] = useState("true");
    const [errPassword, seterrPassword] = useState("");
    const [PhoneNum, setPhoneNum] = useState("");
    const [chPhoneNum, setchPhoneNum] = useState("true");
    const [errPhoneNum, seterrPhoneNum] = useState("");

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        onBackPress(handleBackPress);
    }, []);

    const onSubmit = () => {

        const userObj = {
            "Name": Name,
            "Email": Email,
            "Password": Password,
            "Number": PhoneNum,
        }
        if (userObj.Name && userObj.Email && userObj.Password && userObj.Number != " ") {

            Alert.alert(
                t("Success"),
                `User ${userObj.Name} was successfully created!`,
            );
            navigation.navigate('login')
        }
        else {
            alert(t("Error1"))
        }
        dispatch(adduser(userObj))
    }

    const validateEmail = () => {
        var email = Email.trim();
        if (email == "" || email == undefined || email == null) {
            seterrEmail("Please enter the email");
            setchEmail(false);
            return false;
        } else if (!isValidEmail(email)) {
            seterrEmail("Please enter valid email address");
            setchEmail(false);
            return false;
        } else {
            seterrEmail("");
            setchEmail(true);
            return true;
        }
    }

    const validatePhoneNum = () => {
        var phoneNum = PhoneNum.trim();
        if (phoneNum == "" || phoneNum == undefined || phoneNum == null) {
            seterrPhoneNum("Please enter your contact number");
            setchPhoneNum(false);
            return false;
        } else if (!isValidPhone(phoneNum)) {
            seterrPhoneNum("Please enter 10 digits number ");
            setchPhoneNum(false);
            return false;
        } else {
            seterrPhoneNum("");
            setchPhoneNum(true);
            return true;
        }
    }

    const validatePassword = () => {
        var password = Password.trim();
        if (password == "" || password == undefined || password == null) {
            seterrPassword("Please enter the password")
            setchPassword(false);
            return false;
        } else if (!isValidPassword(password)) {
            seterrPassword("Please enter the valid password")
            setchPassword(false);
            return false;
        } else {
            seterrPassword("");
            setchPassword(true);
            return true
        }
    }

    const validateRePassword = () => {
        var rePass = rePassword.trim();
        if (rePass == "" || rePass == undefined || rePass == null) {
            setchrePassword(false)
            seterrRePassword("Please enter password again");
            return false;
        } else if (rePass != Password) {
            setchrePassword(false);
            seterrRePassword("Password and rePassword must be same");
            return false;
        } else (rePass == Password)
        {
            setchrePassword(true);
            seterrRePassword("")
            return true;

        }
    }

    return (
        <View style={styles.container2}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <MyText style={styles.title}>{t("sigunup_title1")}</MyText>
                    <MyText style={styles.subtitle}>{t("welcome_btn_signup")}</MyText>
                </View>
                <View style={styles.inputout}>
                    <InputWithIcon iconName={Strings.sigunup_name_iconname} placeholder={t("sigunup_name_placeholder")} onChangeText={setName} />
                    <InputWithIcon iconName={Strings.sigunup_email_iconname} placeholder={t("sigunup_email_placeholder")} onChangeText={setEmail} onEndEditing={validateEmail} keyboardType="email-address" />
                    {chEmail ? null : <Text style={styles.error}>{errEmail}</Text>}
                    <InputWithIcon iconName={Strings.sigunup_mob_iconname} placeholder={t("sigunup_mob_placeholder")} onChangeText={setPhoneNum} onEndEditing={validatePhoneNum} keyboardType="phone-pad" />
                    {chPhoneNum == true ? null : <Text style={styles.error}>{errPhoneNum}</Text>}
                    <InputWithIcon iconName={Strings.sigunup_password_iconname} placeholder={t("sigunup_password_placeholder")} onChangeText={setPassword} onEndEditing={validatePassword} secureTextEntry />
                    {chPassword == true ? null : <Text style={styles.error}>{errPassword}</Text>}
                    <InputWithIcon iconName={Strings.sigunup_cpassword_iconname} placeholder={t("sigunup_cpassword_placeholder")} onChangeText={resetPassword} onEndEditing={validateRePassword} secureTextEntry />
                    {chrePassword == true ? null : <Text style={styles.error} >{errRePassword}</Text>}
                </View>
                <CustomButton chEmail={chEmail} onPress={onSubmit} text={t("welcome_btn_signup")} />
                <View style={hr80}></View>
                <MyText>{t("sigunup_title2")}
                    <MyText style={{ color: colors.text1, }} onPress={() => navigation.navigate('login')}>  {t("welcome_btn_login")}</MyText>
                </MyText>
            </ScrollView>
        </View>
    );
    ;
}


export default SignupScreen;