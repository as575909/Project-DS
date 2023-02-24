import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";


const About = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Ayush Kumar Singh</Text>
      <Text style={styles.paraStyle}> I am an Application Developer 😎 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/me1.jpeg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
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
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginTop: 50,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Itim-Regular",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
    fontFamily: "Itim-Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
    borderRadius: 60,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Itim-Regular",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Itim-Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: "20%",
    aspectRatio: 1,
  },
});

export default About;