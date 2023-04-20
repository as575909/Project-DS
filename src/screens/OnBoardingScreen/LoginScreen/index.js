import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { storeData } from '../../../utils/asyncStorage';
import { titles, colors, btn1, hr80 } from '../../../globals/style';
import { isValidEmail, isValidPassword } from '../../../utils/regex';
import { onBackPress } from '../../../utils/backPressHandler';
import { handleBackPress } from '../../../component/Alert';
import { styles } from './index.style';
import Strings from '../../../statics/Strings';
import InputWithIcon from '../../../component/InputWithIcon';
import CustomButton from '../../../component/CustomButton';
import MyText from '../../../component/MyText';

const SignInScreen = (props) => {
    const navigation = useNavigation();

    const [Email, setEmail] = useState("");
    const [chEmail, setchEmail] = useState("true");
    const [errEmail, seterrEmail] = useState("");

    const [Password, setPassword] = useState("");
    const [chPassword, setchPassword] = useState("true");
    const [errPassword, seterrPassword] = useState("");

    const userData = useSelector((state) => state.user);
    useEffect(() => {
        onBackPress(handleBackPress);
    }, []);
    
    const login = async () => {
        let found = false;
        console.log("coming here", userData)
        for (let i = 0; i < userData.data.length; i++) {
            console.log(userData.data[i].Email == Email, "email ")
            if (userData.data[i].Email == Email) {
                found = true;
                console.log(userData.data[i].Email == Email, "Email Matched")
                if (userData.data[i].Password == Password) {
                    console.log("password match", userData.data[i].Password == Password)
                    // await AsyncStorage.setItem('isLoggedIn', '1')
                    await storeData('isLoggedIn', '1')
                    console.log('isLoggedIn')
                    Alert.alert(
                        'Success',
                        `${userData.data[0].Name} you are successfully logged in!`
                    );
                }
                navigation.navigate('TabNavigator')
            }
            else {

                Alert.alert('Email or Password is Incorrect')
                return false;
                // navigation.navigate('TabNavigator')
            }
        }
    };

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

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>{Strings.login_title1}</Text>
                    <Text style={styles.subtitle}>{Strings.login_title2}</Text>
                </View>
                <View style={styles.inputout}>
                    <InputWithIcon iconName={Strings.sigunup_email_iconname} placeholder={Strings.sigunup_email_placeholder} onChangeText={setEmail} onEndEditing={validateEmail} keyboardType="email-address" />
                    {chEmail ? null : <Text style={styles.error}>{errEmail}</Text>}
                    <InputWithIcon iconName={Strings.sigunup_password_iconname} placeholder={Strings.sigunup_password_placeholder} onChangeText={setPassword} onEndEditing={validatePassword} secureTextEntry />
                    {chPassword == true ? null : <Text style={styles.error}>{errPassword}</Text>}
                </View>
                <CustomButton chEmail={chEmail} onPress={login} text={Strings.welcome_btn_login} />
                <Text style={styles.forgot} onPress={() => navigation.navigate('ForgotPswrd')}>{Strings.login_forgot_text}</Text>
                <View style={hr80}></View>
                <MyText>{Strings.login_dont_text}
                <MyText style={{color: colors.text1,}} onPress={() => navigation.navigate('signup')}>  {Strings.welcome_btn_signup}</MyText>
                </MyText>
            </ScrollView>
        </View>
    )
}

export default SignInScreen;