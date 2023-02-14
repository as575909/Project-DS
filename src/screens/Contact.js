import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


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
  )
}



const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 5,
    fontFamily: "Itim-Regular",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "Itim-Regular",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 2,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "Itim-Regular",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "Itim-Regular",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "Itim-Regular",
  },
});

export default Contact;