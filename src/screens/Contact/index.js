import React, { useState } from 'react';
import { Text, View,  Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './index.style';
import { Input } from '../../component/Input';
import { SubmitButton } from '../../component/SubmitButton';
import { Checkbox } from '../../component/CheckBox';
import MyText from '../../component/MyText';
import { useTranslation } from "react-i18next";

// Header component
const Header = () => {
  const {t} = useTranslation();
  return (
    <View>
      <MyText style={styles.mainHeader}> {t("contact_title")} </MyText>
      <MyText style={styles.description}> {t("contact_reach")} </MyText>
    </View>
  );
};

// Contact form component
const Contact = ({ navigation }) => {
  const {t} = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert(t("Error1"));
    } else {
      Alert.alert(t("contact_thankyou"));
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
        <Input label={t("Name")} placeholder={t("contact_name_placeholder")} value={name} onChangeText={(userdata) => setName(userdata)} />
        <Input label={t("Email")} placeholder={t("contact_email_placeholder")} value={email} onChangeText={(email) => setEmail(email)} />
        <Input label={t("Mob")} placeholder={t("contact_mob_placeholder")} value={phone} onChangeText={(phone) => setPhone(phone)} />
        <Input label={t("contact_help")} placeholder={t("contact_help_placeholder")} value={message} onChangeText={(msg) => setMessage(msg)} numberOfLines={5} multiline={true} />
        <Checkbox value={agree} onValueChange={() => setAgree(!agree)} />
        <SubmitButton agree={agree} text={t("contactus")} onPress={submit} />
      </View>
    </ScrollView>
  );
};

export default Contact;
