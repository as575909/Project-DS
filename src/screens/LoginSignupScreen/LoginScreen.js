import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { titles, colors, btn1, hr80} from '../../globals/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),

    password: Yup.string()
    .min(8)
    .required('Please enter your Password')
    .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, atleast one UpperCase letter, one lowercase letter, one number and one special character',
    ),
  });


const LoginScreen = ({navigation}) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
  return (

<Formik initialValues={{
        email: '',
        password: '',
    }}
    validationSchema = {SignupSchema}
    onSubmit = {values => Alert.alert("Login Successful")}>

    {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit}) => (
    <View style = {styles.container}>
      <Text style={styles.head1}>Log In</Text>
         <View style = {styles.inputout}>
         <Icon name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder='Email'
            value={values.email}
            onChangeText = {handleChange('email')}
            onBlur = {() => setFieldTouched('email')}
            onFocus={()=>{
                setEmailfocus(true)
                setPasswordfocus(false)
                setShowpassword(false)
            }} />
         </View>
         {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
            )}
         <View style = {styles.inputout}>
         <Icon name="lock" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder='Password'
            value={values.password}
            onChangeText = {handleChange('password')}
            onBlur = {() => setFieldTouched('password')}
            onFocus={()=>{
                setEmailfocus(false)
                setPasswordfocus(true)
            }}
            secureTextEntry={showpassword === false ? true : false} />
            <Icon name={showpassword == false ? 'eye-slash' : 'eye'} size={24} color= 'grey' 
            style = {styles.icon1}
            onPress={()=> setShowpassword(!showpassword)} />
         </View>
         {touched.password && errors.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
            )}
         
         <TouchableOpacity style = {[btn1, {backgroundColor: isValid ? 'blue' : 'grey'}]} 
         onPress={() => navigation.navigate('TabNavigator')}
         onPressIn={handleSubmit}>
            <Text style={{color: colors.col1, fontSize: titles.btntxt, fontFamily: "Itim-Regular", marginTop: 10}}>Log In</Text>
         </TouchableOpacity>

         <Text style={styles.forgot}>Forgot Password?</Text>
         <Text style={styles.or}>OR</Text>
         <Text style={styles.gftxt}>Sign In With </Text>

         <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.gficon}>
                <Icon name="google" size={30} color = 'red' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.gficon}>
                <Icon name="facebook" size={30} color = 'blue' />
                </View>
            </TouchableOpacity>
         </View>
         <View style={hr80}></View>
         <Text >Don't have an account?
                <Text style={styles.signup} onPress={() => navigation.navigate('signup')}>  Sign Up</Text>
            </Text>
    </View>
    )} 
    </Formik>
  );
;}



const styles = StyleSheet.create({
     container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        
     },
     head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
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
        // alignSelf: 'center',
        elevation: 20,
        
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
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Itim-Regular",
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
        fontFamily: "Itim-Regular",
    },
    gftxt: {
        color: colors.text2,
        marginVertical: 10,
        fontSize: 20,
        fontFamily: "Itim-Regular",
    },
    gf: {
        flexDirection: 'row',
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
    },
    signup: {
        color: colors.text1,
        fontFamily: "Itim-Regular",
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
     
});

export default LoginScreen;