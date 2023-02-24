import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import TabNavigator from '../component/BottomTab';
// import Menu from '../component/Menu';




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
        <Text style={[
          styles.mainHeader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0,
            fontWeight: 'bold',
            fontFamily: 'Kanit-Regular',
          },
        ]}>EduoSkill!!</Text>
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
    height: '40%',
    width: "100%",
    aspectRatio: 1.5,
    display: "flex",
    alignItems: "stretch",
    marginTop: '10%',
    marginBottom: '10%',
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