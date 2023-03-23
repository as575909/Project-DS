import React, { useState } from 'react';
import { Alert, Linking, StatusBar, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { titles, colors, btn1, hr80 } from '../../globals/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { adduser } from '../../redux/LoginReducer';
import { useNavigation } from '@react-navigation/native';





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

    const onSubmit = () => {
        const userObj = {
            "Name": Name,
            "Email": Email,
            "Password": Password,
            "Number": PhoneNum,
        }
        if (userObj.Email && userObj.Password && userObj.Number != " ") {
            Alert.alert(
                'Success!',
                `User ${userObj.Name} was successfully created!`,
            );
            navigation.navigate('login')
        }

        else {
            alert("Please fill all details")
        }
        dispatch(adduser(userObj))
    }


    const validateEmail = () => {
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        var email = Email.trim();
        if (email == "" || email == undefined || email == null) {
            seterrEmail("Please enter the email");
            setchEmail(false);
            return false;
        } else if (!emailRegex.test(email)) {
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
        var phoneRegex = /^[1-9][0-9]{9,12}$/;
        var phoneNum = PhoneNum.trim();

        if (phoneNum == "" || phoneNum == undefined || phoneNum == null) {
            seterrPhoneNum("Please enter your contact number");
            setchPhoneNum(false);
            return false;
        } else if (!phoneRegex.test(phoneNum)) {
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
        var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        var password = Password.trim();

        if (password == "" || password == undefined || password == null) {
            seterrPassword("Please enter the password")
            setchPassword(false);
            return false;
        } else if (!passwordRegex.test(password)) {
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
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Let's get Started</Text>
                    <Text style={styles.subtitle}>Sign up </Text>
                </View>

                <View style = {styles.inputout}>
                  <Icon name="user" size={24} color={Email === true ? colors.text1 : colors.text2} style = {styles.icon} />
                  <TextInput placeholder='Name' onChangeText={setName} value={Name} />
                 </View>

                <View style = {styles.inputout}>
                  <Icon name="at" size={24} color={Email === true ? colors.text1 : colors.text2} style = {styles.icon} />
                  <TextInput placeholder='Email' onChangeText={setEmail} onEndEditing={validateEmail} />
                 </View>
                {
                    chEmail == true ? null : <Text style={{ color: 'red', marginLeft: '5%' }}>{errEmail}</Text>
                }
                <View style = {styles.inputout}>
                  <Icon name="phone" size={24} color={Email === true ? colors.text1 : colors.text2} style = {styles.icon} />
                  <TextInput placeholder='Contact Number' onChangeText={setPhoneNum} onEndEditing={validatePhoneNum} keyboardType={"number-pad"} />
                 </View>
               
                {
                    chPhoneNum == true ? null : <Text style={{ color: 'red', marginLeft: '5%' }}>{errPhoneNum}</Text>
                }
                <View style = {styles.inputout}>
                  <Icon name="lock" size={24} color={Email === true ? colors.text1 : colors.text2} style = {styles.icon} />
                  <TextInput placeholder='Password' onChangeText={setPassword} onEndEditing={validatePassword} secureTextEntry={true} />
                 </View>
                
                {
                    chPassword == true ? null : <Text style={{ color: 'red', marginLeft: '5%' }}>{errPassword}</Text>
                }
                <View style = {styles.inputout}>
                  <Icon name="lock" size={24} color={Email === true ? colors.text1 : colors.text2} style = {styles.icon} />
                  <TextInput placeholder='Confirm Password' onChangeText={resetPassword} onEndEditing={validateRePassword} secureTextEntry={true} />
                 </View>
                
                {
                    chrePassword == true ? null : <Text style={{ color: 'red', marginLeft: '5%' }} >{errRePassword}</Text>
                }

                <TouchableOpacity style={[btn1, { alignSelf: 'center' }, { backgroundColor: validatePassword ? 'blue' : 'grey' }]}
                    //  onPress={() => navigation.navigate('TabNavigator')}
                    onPress={onSubmit}
                
                >
                    <Text style={{ color: 'white', fontSize: titles.btntxt, fontFamily: "Itim-Regular", marginTop: 10 }}>Sign up</Text>
                </TouchableOpacity>

                {/* <Text style={styles.or}>OR</Text>
                <Text style={styles.gftxt}>Sign In With </Text> */}

                {/* <View style={styles.gf}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://github.com/as575909")}>
                        <View style={styles.gficon}>
                            <Icon name="google" size={30} color='red' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL("https://github.com/as575909")}>
                        <View style={styles.gficon}>
                            <Icon name="facebook" size={30} color='blue' />
                        </View>
                    </TouchableOpacity>
                </View> */}
                <View style={[hr80, {alignSelf: 'center'}]}></View>
                <Text style={styles.dont}>Already Have an account?
                    <Text style={styles.signup} onPress={() => navigation.navigate('login')}>  Log In</Text>
                </Text>
            </ScrollView>
        </View>
    );
    ;
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',

    },
    topContainer: {
        marginTop: 50,
        alignItems: 'center',
    },
    title: {
        color: 'blue',
        // fontWeight: 'bold',
        fontSize: 30,
        fontFamily: "Itim-Regular",
        textAlign: 'center',
    },
    subtitle: {
        color: 'blue',
        fontSize: 25,
      //  paddingTop: 3,
        fontFamily: "Itim-Regular",
        textAlign: 'center',
    },

    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 0,
        fontFamily: "Itim-Regular",
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 0,
        alignSelf: 'center',
        elevation: 20,

    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '75%',
        fontFamily: "Itim-Regular",
    },
    icon: {
        padding: 10,
    },
    icon1: {
        padding: 1,
        marginTop: 10,
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Itim-Regular",
    },
    or: {
        color: colors.text1,
        marginVertical: 8,
        fontWeight: 'bold',
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },
    gftxt: {
        color: colors.text2,
        marginVertical: 5,
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
    errormsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    errorTxt: {
        fontSize: 12,
        color: 'red',

    },
    bottomContainer: {
        justifyContent: 'center',
        marginTop: 50,
    },
    dont: {
        marginTop: '-2%',
        alignSelf: 'center',
    },

});

export default SignupScreen;