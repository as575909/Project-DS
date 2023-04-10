import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import React from "react";
import Strings from '../../statics/Strings';
import me1 from '../../assets/images/me1.jpeg';
import { Images } from "../../assets/images";
// import images from '../../statics/images';
import { styles } from "./index.style";


const About = () => {
  return (
   
    
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Ayush Kumar Singh</Text>
      <Text style={styles.paraStyle}> I am an Application Developer 😎 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={Images.me1}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
        {Strings.Description}
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://instagram.com/_ayush.singh___?igshid=YmMyMTA2M2Y=")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1384/1384015.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/ayush-singh-3a2b6916b/"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3669/3669739.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/as575909")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
    
    
  );
};



export default About;