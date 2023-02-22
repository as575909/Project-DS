import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Menu from '../component/Menu';
import HomeHeadNav from '../component/HomeHeadNav';
import DrawerNav from '../component/DrawerNav';

const Home = (props) => {
  const description = "Lorem ipsum dolor sit amet. Et commodi enim ut modi maxime quo minus rerum a nihil commodi et aspernatur officiis et repudiandae alias. Quo aperiam consequatur";
  return (
    <View style = {styles.mainContainer}>
      <StatusBar />
      <HomeHeadNav style={styles.header} />   
      <View style = {styles.homeTop}>
      
        <Image style = {styles.headerImage}
          resizeMode = "stretch"
          source = {require("../../assets/logo1.jpg")}/>
        <Text style = {styles.mainHeader}> Welcome to </Text>
        <Text style = {[
          styles.mainHeader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0,
            fontWeight: 'bold',
            fontFamily: 'Kanit-Regular',
          },
        ]}>{props.channelName}</Text>  
        <Text style = {styles.paraStyle}>{description}</Text>
      </View>

      <View style = {styles.menuStyle}>
        <View style = {styles.lineStyle}></View>
        <Menu />
        <View style = {[
          styles.lineStyle,
          {
            marginVertical: 10,
          },
          ]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: "flex",
    justifyContent: "space-between",
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
    height: 150,
    width: "100%",
    aspectRatio: 2,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Itim-Regular",
  },

  paraStyle: {
    textAlign: "center",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 20,
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