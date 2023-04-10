import React, { useEffect } from 'react';
import { Text, View, Image, StatusBar, BackHandler } from 'react-native';
import TabNavigator from '../../Navigation/BottomTab';
// import Menu from '../component/Menu';
import Strings from '../../statics/Strings';
// import styles from '../../statics/styles';
// import front from '../../assets/';
import { useNavigation } from '@react-navigation/native';
import { onBackPress } from '../../utils/backPressHandler';
import { Images } from '../../assets/images';
import { styles } from './index.style';


const Home = () => {

  const navigation = useNavigation();

  // function handleBkPress() {
  //   navigation.goBack();
  //   return true;
  // }

  // useEffect(() => {
  //   onBackPress(handleBkPress);
  // }, []);

  return (
    <View style={styles.mainContainer}>

      <StatusBar />

      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="stretch"
          source={Images.front} />
        <Text style={styles.mainHeader}> {Strings.Welcome} </Text>
        <Text style={styles.mainHeader1}>{Strings.InstaMart}</Text>
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