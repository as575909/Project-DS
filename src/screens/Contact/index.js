import React, { useState } from 'react';
import { Text, View,  Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './index.style';
import  Strings  from '../../statics/Strings';
import { Input } from '../../component/Input';
import { SubmitButton } from '../../component/SubmitButton';
import { Checkbox } from '../../component/CheckBox';

// Header component
const Header = () => {
  return (
    <View>
      <Text style={styles.mainHeader}> {Strings.contact_title} </Text>
      <Text style={styles.description}> {Strings.contact_reach} </Text>
    </View>
  );
};

// Contact form component
const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert(Strings.Error1);
    } else {
      Alert.alert(Strings.contact_thankyou);
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
        <Input label={Strings.Name} placeholder={Strings.contact_name_placeholder} value={name} onChangeText={(userdata) => setName(userdata)} />
        <Input label={Strings.Email} placeholder={Strings.contact_email_placeholder} value={email} onChangeText={(email) => setEmail(email)} />
        <Input label={Strings.Mob} placeholder={Strings.contact_mob_placeholder} value={phone} onChangeText={(phone) => setPhone(phone)} />
        <Input label={Strings.contact_help} placeholder={Strings.contact_help_placeholder} value={message} onChangeText={(msg) => setMessage(msg)} numberOfLines={5} multiline={true} />
        <Checkbox value={agree} onValueChange={() => setAgree(!agree)} />
        <SubmitButton agree={agree} text={Strings.contactus} onPress={submit} />
      </View>
    </ScrollView>
  );
};

export default Contact;
