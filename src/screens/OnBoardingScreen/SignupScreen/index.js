import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { titles, colors, btn1, hr80 } from '../../../globals/style';
import { useDispatch } from 'react-redux';
import { adduser } from '../../../redux/reducers/LoginReducer';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../statics/Strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyTextInput from '../../../component/MyTextInput';
import { isValidEmail, isValidPhone, isValidPassword } from '../../../utils/regex';
import { moderateScale } from 'react-native-size-matters';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { onBackPress } from '../../../utils/backPressHandler';
import { handleBackPress } from '../../../component/Alert';
import InputWithIcon from '../../../component/InputWithIcon';

const SignupScreen = ({ }) => {

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
            if(chEmail && chPhoneNum && chPassword && chrePassword != 'true'){
            Alert.alert(
                Strings.Success,
                `User ${userObj.Name} was successfully created!`,
            );
            navigation.navigate('login')
        }}
        else {
            alert(Strings.Error1)
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
                    <Text style={styles.title}>{Strings.Title1}</Text>
                    <Text style={styles.subtitle}>{Strings.welcome_btn_signup}</Text>
                </View>

                {/* <View style={styles.inputout}>
                    <Icon name="user" size={24} color={Name === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput placeholder={Strings.Name} onChangeText={setName} value={Name} />
                </View>

                <View style={styles.inputout}>
                    <Icon name="at" size={24} color={Email === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput placeholder={Strings.Email} onChangeText={setEmail} onEndEditing={validateEmail} onBlur={e => this.validateEmail} />

                </View>
                {chEmail ? null : <Text style={styles.error}>{errEmail}</Text>}


                <View style={styles.inputout}>
                    <Icon name="phone" size={24} color={Email === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput placeholder={Strings.Mob} onChangeText={setPhoneNum} onEndEditing={validatePhoneNum} onBlur={e => this.validatePhoneNum} keyboardType={"number-pad"} />
                </View>

                {chPhoneNum == true ? null : <Text style={styles.error}>{errPhoneNum}</Text>}

                <View style={styles.inputout}>
                    <Icon name="lock" size={24} color={Email === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput placeholder={Strings.Password} onChangeText={setPassword} onEndEditing={validatePassword} onBlur={e => this.validatePassword} secureTextEntry={true} />
                </View>

                {chPassword == true ? null : <Text style={styles.error}>{errPassword}</Text>}

                <View style={styles.inputout}>
                    <Icon name="lock" size={24} color={Email === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput placeholder={Strings.CPassword} onChangeText={resetPassword} onEndEditing={validateRePassword} onBlur={e => this.validateRePassword} secureTextEntry={true} />
                </View>

                {chrePassword == true ? null : <Text style={styles.error} >{errRePassword}</Text>} */}


                <View style={styles.inputout}>
                    <InputWithIcon iconName="user" placeholder="Name" onChangeText={setName} />
                    <InputWithIcon iconName="envelope" placeholder="Email" onChangeText={setEmail} onEndEditing={validateEmail} keyboardType="email-address" />
                    {chEmail ? null : <Text style={styles.error}>{errEmail}</Text>}
                    <InputWithIcon iconName="phone" placeholder="Phone" onChangeText={setPhoneNum} onEndEditing={validatePhoneNum} keyboardType="phone-pad" />
                    {chPhoneNum == true ? null : <Text style={styles.error}>{errPhoneNum}</Text>}
                    <InputWithIcon iconName="lock" placeholder="Password" onChangeText={setPassword} onEndEditing={validatePassword} secureTextEntry />
                    {chPassword == true ? null : <Text style={styles.error}>{errPassword}</Text>}
                    <InputWithIcon iconName="check" placeholder="Confirm Password" onChangeText={resetPassword} onEndEditing={validateRePassword} secureTextEntry />
                    {chrePassword == true ? null : <Text style={styles.error} >{errRePassword}</Text>}
                </View>


                <TouchableOpacity style={[btn1, { alignSelf: 'center' }, { backgroundColor: validatePassword ? 'blue' : 'grey' }]}
                    //  onPress={() => navigation.navigate('TabNavigator')}
                    onPress={onSubmit}
                >
                    <Text style={styles.signupTxt}>{Strings.welcome_btn_signup}</Text>
                </TouchableOpacity>

                <View style={hr80}></View>
                <Text style={styles.dont}>{Strings.Title2}
                    <Text style={styles.signup} onPress={() => navigation.navigate('login')}>  {Strings.welcome_btn_login}</Text>
                </Text>
            </ScrollView>
        </View>
    );
    ;
}



const styles = StyleSheet.create({
    container2: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',

    },
    topContainer: {
        marginTop: moderateScale(50),
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        color: 'blue',
        fontSize: moderateScale(30),
        fontFamily: "Itim-Regular",
    },
    subtitle: {
        color: 'blue',
        fontSize: responsiveFontSize(3.5),
        fontFamily: "Itim-Regular",
    },

    inputout: {
        // flexDirection: 'row',
        flex: 1,
        width: '90%',
        marginVertical: moderateScale(10),
        backgroundColor: colors.col1,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(5),
        paddingVertical: moderateScale(0),
        alignSelf: 'center',
        elevation: moderateScale(20),
    },
    input: {
        fontSize: responsiveFontSize(2),
        marginLeft: moderateScale(10),
        width: '75%',
        fontFamily: "Itim-Regular",
    },
    icon: {
        padding: moderateScale(10),
    },
    icon1: {
        padding: moderateScale(1),
        marginTop: moderateScale(10),
    },
    forgot: {
        color: colors.text2,
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10),
        fontFamily: "Itim-Regular",
    },
    or: {
        color: colors.text1,
        marginVertical: moderateScale(8),
        fontWeight: 'bold',
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },

    signup: {
        color: colors.text1,
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },
    dont: {
        marginTop: '-2%',
        alignSelf: 'center',
    },
    error: {
        color: 'red',
        marginLeft: '5%',
    },
    signupTxt: {
        color: 'white',
        fontSize: responsiveFontSize(3),
        fontFamily: "Itim-Regular",
        marginTop: moderateScale(10),
    },

});

export default SignupScreen;