import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screens/Home';


const App = () => {
  const description = "Lorem ipsum dolor sit amet. Et commodi enim ut modi maxime quo minus rerum a nihil commodi et aspernatur officiis et repudiandae alias. Quo aperiam consequatur";
  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.homeTop}>
        <Image style = {styles.headerImage}
          resizeMode = "contain"
          source = {require("./assets/logo.jpeg")}/>
        <Text style = {styles.mainHeader}> Welcome to </Text>
        <Text style = {[
          styles.mainHeader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0,
          },
        ]}> EduoSkill </Text>  
        <Text style = {styles.paraStyle}>{description}</Text>
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

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: 200,
    width: "100%",
    aspectRatio: 1,
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
  },

  paraStyle: {
    textAlign: "center",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50, 
    lineHeight: 26,
  },
});

export default App;