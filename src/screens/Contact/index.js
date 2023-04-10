import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './index.style';
import {Strings} from '../../statics/Strings'


const Contact = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <ScrollView>
    <View style ={styles.mainContainer}>
      <Text style = {styles.mainHeader}> Level up your Knowledge </Text>
      <Text style = {styles.description}> You can reach us anytime via as575909@gmail.com </Text>

      <View style ={styles.inputContainer}>
        <Text style ={styles.labels}> Enter your Name </Text>
        <TextInput
        style ={styles.inputStyle}
        placeholder = {"Ayush Singh"}
        value ={name}
        onChangeText = {(userdata) => setName(userdata)}
         />
      </View>

      <View style ={styles.inputContainer}>
        <Text style ={styles.labels}> Enter your Email </Text>
        <TextInput
        style ={styles.inputStyle}
        placeholder = {"demo@project.com"}
        value ={email}
        onChangeText ={(email) => setEmail(email)}
         />
      </View>

      <View style ={styles.inputContainer}>
        <Text style ={styles.labels}> Enter your Contact Number </Text>
        <TextInput
        style ={styles.inputStyle}
        placeholder = {"10-Digit"}
        value ={phone}
        onChangeText = {(phone) => setPhone(phone)}
         />
      </View>

      <View style ={styles.inputContainer}>
        <Text style ={styles.labels}>  How can we help you? </Text>
        <TextInput
        style ={[styles.inputStyle, styles.multilineStyle]}
        placeholder = {"Tell us about your self"}
        value ={message}
        onChangeText = {(msg) => setMessage(msg)}
        numberOfLines = {5}
        multiline ={true}
         />
      </View>

       {/* checkbox */}
       <View style ={styles.wrapper}>
        <CheckBox
        value={agree}
        onValueChange={() => setAgree(!agree)}
        color={agree ? "#4630EB" : undefined}
        />
        <Text style ={styles.wrapperText}> I have read and agreed with the TC </Text>
       </View>
      
      {/* submit button */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  )
}





export default Contact;