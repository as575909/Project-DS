import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './index.style';
import colors from '../../../statics/styles/colors';
import { useDispatch, useSelector } from "react-redux";
import { adduser, ResetPassword, updatePassword } from '../../../redux/reducers/LoginReducer';


const ResetPasswordScreen = ({ props,route, navigation }) => {
 
    const [newPass, SetNewPass] = useState();
    const [CreatenewPass, SetCreateNewPass] = useState();
    const userData = useSelector((state) => state.user);
    console.log(userData);

    const { phoneNumber } = route.params;
    // const phoneNumber = useSelector((state) => state.confirm);
    console.log(phoneNumber, " here is Phone Number")
    let currentUser = userData.data.find((item) => item.Number === phoneNumber);
    console.log("qwerty",currentUser);

    const dispatch = useDispatch();
    const OnSave = () => {
        const newObj = {
            "Email": userData.data[0].Email,
            "Number": userData.data[0].Number,
            "Password": newPass
        }
        if (newPass === CreatenewPass) {
           // Alert.alert("Succes to create new pass")
           dispatch(updatePassword(userData.data[0].Number, newPass));
            // console.log("reset", ResetPassword(newObj))
            alert('Password reset successfully!');
            navigation.navigate('login')
        }
    }
  
  // const handleResetPassword = () => {
  //   // Password reset logic here
  //   if (password === confirmPassword) {
  //     // Replace with actual password reset logic (e.g. using Firebase)
  //     // Store new password in local storage or database
  //     // ...
  //     alert('Password reset successfully!');
  //     navigation.navigate('login');
  //   } else {
  //     alert('Passwords do not match. Please try again.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Enter your new password below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.text3}
        secureTextEntry={true}
        autoCapitalize="none"
        value={CreatenewPass}
        //onChangeText={(text) => setPassword(text)}
        onChangeText={SetCreateNewPass}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={colors.text3}
        secureTextEntry={true}
        autoCapitalize="none"
        value={newPass}
        //onChangeText={(text) => setConfirmPassword(text)}
        onChangeText={SetNewPass}
      />
      <TouchableOpacity style={styles.button}  onPress={() => OnSave()} >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ResetPasswordScreen;









