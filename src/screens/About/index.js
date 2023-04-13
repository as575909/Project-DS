import { Linking, Text, TouchableOpacity, View, Image, } from "react-native";
import React from "react";
import Strings from '../../statics/Strings';
import { Images } from "../../assets/images";
import { webImgs } from "../../assets/images";
import { styles } from "./index.style";
import { useSelector } from 'react-redux';
import UserAvatar from "../../component/UserAvatar";
import SocialButton from "../../component/SocialButton";


const About = () => {
  const userName = useSelector((state) => state.user);
  const phoneNumber = 'tel:${1234567890}';
  const emailAddress = 'mailto:as575909@gmail.com';
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>{userName.data[0].Name}</Text>
      <Text style={styles.paraStyle}>{Strings.about_user_title}</Text>

      <UserAvatar />

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> {Strings.about} </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          {Strings.home_description}
        </Text>
      </View>
      <Text style={styles.mainHeader}> {Strings.about_follow_title} </Text>
      <View style={styles.menuContainer}>
        <SocialButton url={Strings.user_instagram} icon={webImgs.instagram} />
        <SocialButton url={Strings.user_linkedIn} icon={webImgs.linkedIn} />
        <SocialButton url={Strings.user_github} icon={webImgs.gitHub} />
        <SocialButton url={phoneNumber} icon={webImgs.gitHub} />
        <SocialButton url={emailAddress} icon={webImgs.gitHub} />
      </View>
    </View>
  );
};
export default About;