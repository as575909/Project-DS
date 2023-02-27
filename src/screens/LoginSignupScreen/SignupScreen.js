import React, { useState } from 'react';
import { Alert, Linking, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { titles, colors, btn1, hr80} from '../../globals/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    namee: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please enter your full name'),

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

    confirmPassword: Yup.string()
    .min(8, 'Confirm Password must be 8 characters long')
    .oneOf([Yup.ref('password')], 'Password do not match')
    .required('Confirm password is required'),

    mobile: Yup.string()
    .min(10, 'Must be 10 digits')
    .max(10, 'Must be 10 digits')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Please enter your mobile number'),
  });
  

const SignupScreen = ({navigation}) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);
    const [namefocus, setNamefocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

  return (

    <Formik initialValues={{
        namee: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
    }}
    validationSchema = {SignupSchema}
    onSubmit = {values => Alert.alert(JSON.stringify(values))}
    >

    {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit}) => (    
    <View style = {styles.container}>
        <StatusBar barStyle={'light-content'} />
      <Text style={styles.head1}>Sign Up</Text>
{/* Name */}
         <View style = {styles.inputout}>
         <Icon name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder=' Full Name'
            value={values.namee}
            onChangeText = {handleChange('namee')}
            onBlur = {() => setFieldTouched('namee')}
            onFocus={()=>{
              setNamefocus(true)
                setEmailfocus(false)
                setPhonefocus(false)
                setPasswordfocus(false)
                setShowpassword(false)
            }} />
            
         </View>
         {touched.namee && errors.namee && (
                <Text style={styles.errorTxt}>{errors.namee}</Text>
            )}
{/* Email */}
         <View style = {styles.inputout}>
         <Icon name="at" size={24} color={emailfocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder='Email'
             value={values.email}
             onChangeText = {handleChange('email')}
             onBlur = {() => setFieldTouched('email')}
            onFocus={()=>{
              setNamefocus(false)
                setEmailfocus(true)
                setPhonefocus(false)
                setPasswordfocus(false)
                setShowpassword(false)
            }} />
         </View>
         {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
            )}
{/* Phone Number */}
        <View style = {styles.inputout}>
         <Icon name="phone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder='Phone Number'
            keyboardType='number-pad'
             value={values.mobile}
             onChangeText = {handleChange('mobile')}
             onBlur = {() => setFieldTouched('mobile')}
            onFocus={()=>{
                setNamefocus(false)
                setEmailfocus(false)
                setPhonefocus(true)
                setPasswordfocus(false)
                setShowpassword(false)
            }} />
         </View>
         {touched.mobile && errors.mobile && (
                <Text style={styles.errorTxt}>{errors.mobile}</Text>
            )}
{/* Password */}
         <View style = {styles.inputout}>
         <Icon name="lock" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder='Password'
             value={values.password}
             onChangeText = {handleChange('password')}
             onBlur = {() => setFieldTouched('password')}
            onFocus={()=>{
              setNamefocus(false)
              setPhonefocus(false)
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
{/* Confirm Password */}
         <View style = {styles.inputout}>
         <Icon name="lock" size={24} color={cpasswordfocus === true ? colors.text1 : colors.text2} style = {styles.icon} />
            <TextInput style={styles.input} placeholder=' Confirm Password'
            value={values.confirmPassword}
            onChangeText = {handleChange('confirmPassword')}
            onBlur = {() => setFieldTouched('confirmPassword')}
            onFocus={()=>{
              setNamefocus(false)
              setPhonefocus(false)
                setEmailfocus(false)
                setcPasswordfocus(true)
                setPasswordfocus(false)
            }}
            secureTextEntry={showcpassword === false ? true : false} />
            <Icon name={showcpassword == false ? 'eye-slash' : 'eye'} size={24} color= 'grey' 
            style = {styles.icon1}
            onPress={()=> setShowcpassword(!showcpassword)} />
         </View>
         {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
            )}
{/* Signup Button  */}
         <TouchableOpacity style = {[btn1, {backgroundColor: isValid ? 'blue' : 'grey'}]} 
         onPress={() => navigation.navigate('TabNavigator')}
         onPressIn={handleSubmit} 
         disabled = {!isValid}>
            <Text style={{color: colors.col1, fontSize: titles.btntxt, fontFamily: "Itim-Regular", marginTop: 10}}>Sign up</Text>
         </TouchableOpacity>

         {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
         <Text style={styles.or}>OR</Text>
         <Text style={styles.gftxt}>Sign In With </Text>

         <View style={styles.gf}>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/as575909")}>
                <View style={styles.gficon}>
                <Icon name="google" size={30} color = 'red' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/as575909")}>
                <View style={styles.gficon}>
                <Icon name="facebook" size={30} color = 'blue' />
                </View>
            </TouchableOpacity>
         </View>
         <View style={hr80}></View>
         <Text >Already Have an account?
                <Text style={styles.signup} onPress={() => navigation.navigate('login')}>  Log In</Text>
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
        //justifyContent: 'center',
        
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
        // alignSelf: 'center',
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
    },
    gftxt: {
        color: colors.text2,
        marginVertical: 5,
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

export default SignupScreen;