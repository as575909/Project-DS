// import React, { useState } from 'react';
// import { emailRegex, passwordRegex } from '../utils/regex';

// const [Name, setName] = useState('');

// const [Email, setEmail] = useState("");
// const [chEmail, setchEmail] = useState("true");
// const [errEmail, seterrEmail] = useState("");

// const [rePassword, resetPassword] = useState("");
// const [chrePassword, setchrePassword] = useState("true");
// const [errRePassword, seterrRePassword] = useState("");

// const [Password, setPassword] = useState("");
// const [chPassword, setchPassword] = useState("true");
// const [errPassword, seterrPassword] = useState("");

// const [PhoneNum, setPhoneNum] = useState("");
// const [chPhoneNum, setchPhoneNum] = useState("true");
// const [errPhoneNum, seterrPhoneNum] = useState("");


// export const validateEmail = () => {
//     var email = Email.trim();
//     if (email == "" || email == undefined || email == null) {
//         seterrEmail("Please enter the email");
//         setchEmail(false);
//         return false;
//     } else if (!emailRegex.test(email)) {
//         seterrEmail("Please enter valid email address");
//         setchEmail(false);
//         return false;
//     } else {
//         seterrEmail("");
//         setchEmail(true);
//         return true;
//     }
// }

// export const validatePhoneNum = () => {
//     var phoneNum = PhoneNum.trim();

//     if (phoneNum == "" || phoneNum == undefined || phoneNum == null) {
//         seterrPhoneNum("Please enter your contact number");
//         setchPhoneNum(false);
//         return false;
//     } else if (!phoneRegex.test(phoneNum)) {
//         seterrPhoneNum("Please enter 10 digits number ");
//         setchPhoneNum(false);
//         return false;
//     } else {
//         seterrPhoneNum("");
//         setchPhoneNum(true);
//         return true;
//     }
// }

// export const validatePassword = () => {
//     var password = Password.trim();

//     if (password == "" || password == undefined || password == null) {
//         seterrPassword("Please enter the password")
//         setchPassword(false);
//         return false;
//     } else if (!passwordRegex.test(password)) {
//         seterrPassword("Please enter the valid password")
//         setchPassword(false);
//         return false;
//     } else {
//         seterrPassword("");
//         setchPassword(true);
//         return true
//     }
// }

// export const validateRePassword = () => {
//     var rePass = rePassword.trim();
//     if (rePass == "" || rePass == undefined || rePass == null) {
//         setchrePassword(false)
//         seterrRePassword("Please enter password again");
//         return false;
//     } else if (rePass != Password) {
//         setchrePassword(false);
//         seterrRePassword("Password and rePassword must be same");
//         return false;
//     } else (rePass == Password)
//     {
//         setchrePassword(true);
//         seterrRePassword("")
//         return true;

//     }
// }