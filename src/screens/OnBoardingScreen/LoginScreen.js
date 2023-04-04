import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {storeData} from '../../utils/asyncStorage';
import { titles, colors, btn1, hr80 } from '../../globals/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isValidEmail, isValidPassword } from '../../utils/regex';
import MyTextInput from '../../component/MyTextInput';
import { moderateScale } from 'react-native-size-matters';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


const SignInScreen = (props) => {
    const navigation = useNavigation();

    const [Email, setEmail] = useState("");
    const [chEmail, setchEmail] = useState("true");
    const [errEmail, seterrEmail] = useState("");

    const [Password, setPassword] = useState("");
    const [chPassword, setchPassword] = useState("true");
    const [errPassword, seterrPassword] = useState("");

    const [showpassword, setShowpassword] = useState(false);

    const userData = useSelector((state) => state.user);


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
               
                alert('Email or Password is Incorrect')
                return false;
              // navigation.navigate('TabNavigator')
            }}
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

        }}

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
        }}

    return (
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>
                        Welcome Back
                    </Text>
                    <Text style={styles.subtitle}>Login into continue</Text>
                </View>

                <View style={styles.inputout}>
                    <Icon name="user" size={24} color={Email === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput placeholder='Enter Email' onChangeText={setEmail} onEndEditing={validateEmail} onBlur={e => this.validateEmail} />

                </View>
                {
                    chEmail == true ? null : <Text style={{ color: 'red', marginLeft: '5%' }}>{errEmail}</Text>
                }

                <View style={styles.inputout}>
                    <Icon name="lock" size={24} color={Password === true ? colors.text1 : colors.text2} style={styles.icon} />
                    <MyTextInput                         placeholder='Password'
                        onChangeText={setPassword}
                        onEndEditing={validatePassword}
                        onBlur={e => this.validatePassword}
                        //secureTextEntry={true} />
                        secureTextEntry={showpassword === false ? true : false} />
                    {/* <Icon name={showpassword == false ? 'eye-slash' : 'eye'} size={24} color='grey'
                        style={styles.icon1}
                        onPress={() => setShowpassword(!showpassword)} /> */}
                </View>
                {
                    chPassword == true ? null : <Text style={{ color: 'red', marginLeft: '5%' }}>{errPassword}</Text>
                }

                <TouchableOpacity style={[btn1, { alignSelf: 'center' }, { backgroundColor: validatePassword ? 'blue' : 'grey' }]}
                    // onPress={() => navigation.navigate('TabNavigator')}
                    onPress={login}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: "Itim-Regular", marginTop: 10 }}>Log In</Text>
                </TouchableOpacity>

                <Text style={styles.forgot}>Forgot Password?</Text>
                {/* <Text style={styles.or}>OR</Text>
                <Text style={styles.gftxt}>Sign In With </Text> */}

                {/* <View style={styles.gf}>
                         <TouchableOpacity>
                             <View style={styles.gficon}>
                                 <Icon name="google" size={30} color='red' />
                             </View>
                         </TouchableOpacity>

                        <TouchableOpacity>
                             <View style={styles.gficon}>
                                 <Icon name="facebook" size={30} color='blue' />
                             </View>
                         </TouchableOpacity>
                     </View> */}
                     <View style={[hr80, {alignSelf: 'center'}]}></View>
                     <Text style={styles.dont} >Don't have an account?
                        <Text style={styles.signup} onPress={() => navigation.navigate('signup')}>  Sign Up</Text>
                    </Text>

            </ScrollView>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    topContainer: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: 10,
        fontFamily: "Itim-Regular",
        // marginTop: moderateScale(50),
        // alignItems: 'center',
        // textAlign: 'center',
    },
    title: {
        color: 'blue',
        // fontWeight: 'bold',
        fontSize: 30,
        fontFamily: "Itim-Regular",
        // textAlign: 'center',
    },
    subtitle: {
        // color: 'blue',
        // fontSize: 25,
        // paddingTop: 3,
        // fontFamily: "Itim-Regular",
        // textAlign: 'center',
        color: 'blue',
        fontSize: responsiveFontSize(3.5),
        fontFamily: "Itim-Regular",
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: 'center',
        elevation: 20,
        // flexDirection: 'row',
        // width: '95%',
        // marginVertical: moderateScale(10),
        // backgroundColor: colors.col1,
        // borderRadius: moderateScale(10),
        // paddingHorizontal: moderateScale(5),
        // paddingVertical: moderateScale(0),
        // alignSelf: 'center',
        // elevation: moderateScale(20),

    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
        fontFamily: "Itim-Regular",
    },
    icon: {
        padding: 10,
    },
    icon1: {
        padding: 1,
        marginTop: 10,
        paddingLeft: 30,
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },
    gftxt: {
        color: colors.text2,
        marginVertical: 10,
        fontSize: 20,
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },
    gf: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
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
});


export default SignInScreen;