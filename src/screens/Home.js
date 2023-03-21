import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import TabNavigator from '../Navigation/BottomTab';
// import Menu from '../component/Menu';
import Strings from '../statics/Strings';
import styles from '../statics/styles';

const Home = () => {
  // const description = "Lorem ipsum dolor sit amet. Et commodi enim ut modi maxime quo minus rerum a nihil commodi et aspernatur officiis et repudiandae alias. Quo aperiam consequatur";
  return (
    <View style={styles.mainContainer}>

      <StatusBar />

      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="stretch"
          source={require("../assets/images/logo1.jpg")} />
        <Text style={styles.mainHeader}> {Strings.Welcome} </Text>
        <Text style={styles.mainHeader1}>{Strings.EduoSkill}</Text>
        <Text style={styles.paraStyle}>{Strings.Description}</Text>
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


export default Home;