/**
 * Helper class for Async Storage
 */


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';




export const retrieveData = async () => {
    const navigation = useNavigation();
    try {
        const value = await AsyncStorage.getItem('isLoggedIn' , (err, result) => {
            navigation.navigate(result != '1' ? 'signup' : 'TabNavigator')
            console.log(result);
          });
      
    } catch (error) {
        // Error retrieving data
        console.log("error")
    }
};



// const userData = useSelector((state) => state.user);
// export const login = async () => {
    
//         let found = false;
//         console.log("coming here", userData)
//         for (let i = 0; i < userData.data.length; i++) {
//             console.log(userData.data[i].Email == Email, "email ")
//             if (userData.data[i].Email == Email) {
//                 found = true;
//                 console.log(userData.data[i].Email == Email, "Email Matched")
//                 if (userData.data[i].Password == Password) {
//                     console.log("password match", userData.data[i].Password == Password)
//                     await AsyncStorage.setItem('isLoggedIn', '1')
//                     console.log('isLoggedIn')
//                     Alert.alert('Success',
//                         `User ${userData.data[0].Email} has successfully logged in!`
//                     )

//                 }
//                 navigation.navigate('TabNavigator')
//             }
//             else {
//                 alert('Email or Password is Incorrect')
//                 return false
//             }
//         }
//     }



// export const logout = async () => {
//     const asyncStorageKeys = await AsyncStorage.getAllKeys();
//     if (asyncStorageKeys.length > 0) {
//         await AsyncStorage.clear();
//         props.naviagtion.navigate('login');

//         Alert.alert(
//             'All App Data',
//             'Transit Authority data, route selections, are all deleted',
//             [
//                 { text: 'OK' },
//             ]
//         );
//     }
//   }
