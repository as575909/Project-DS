import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import TabNavigator from '../Navigation/BottomTab';
// import Menu from '../component/Menu';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";




const Home = () => {
  const description = "Lorem ipsum dolor sit amet. Et commodi enim ut modi maxime quo minus rerum a nihil commodi et aspernatur officiis et repudiandae alias. Quo aperiam consequatur";
  return (
    <View style={styles.mainContainer}>

      <StatusBar />

      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="stretch"
          source={require("../../assets/logo1.jpg")} />
        <Text style={styles.mainHeader}> Welcome to </Text>
        <Text style={styles.mainHeader1}>EduoSkill!!</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      {/* <View style = {styles.menuStyle}> */}
      {/* <View style = {styles.lineStyle}></View> */}
      {/* <Menu /> */}
      {/* <TabNavigator /> */}
      {/* <View style = {[
          styles.lineStyle,
          {
            marginVertical: 10,
          },
          ]}></View> */}
      {/* </View> */}

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: "flex",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  header: {
    display: 'flex',
    width: '100%',
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    // height: '40%',
    // width: "100%",
    width: responsiveWidth(80),
    height: responsiveHeight(30),
    // aspectRatio: 1.5,
    // display: "flex",
    // alignItems: "stretch",
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(5),
    borderRadius: responsiveWidth(4),
  },

  mainHeader: {
    // fontSize: 30,
    fontSize: responsiveFontSize(4),
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Itim-Regular",
  },

  mainHeader1: {
      fontSize:responsiveFontSize(6),
      color: "#4c5dab",
      marginTop: 0,
      fontWeight: 'bold',
  },

  paraStyle: {
    textAlign: "center",
    fontSize: responsiveFontSize(2.2),
    color: "#7d7d7d",
    marginTop: 10,
    paddingBottom: 30,
    lineHeight: 26,
    fontFamily: "Itim-Regular",
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "#4c5dab",
  },
});
export default Home;