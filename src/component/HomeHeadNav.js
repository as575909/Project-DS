import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../globals/style';
import { useNavigation } from '@react-navigation/native';
import DrawerNav from '../Navigation/DrawerNav';


const HomeHeadNav = () => {
  const navigation = useNavigation();
  return (
  
    <SafeAreaView>
    {/* <DrawerNav /> */}
    
    <View style={styles.container}>

      {/* <TouchableOpacity  onPress={() => navigation.navigate('DrawerNav')}>
        <Icon name="bars" size={24} color='black' style={styles.myicon} />
        </TouchableOpacity> */}
      <TextInput placeholder='Search' style={styles.mytext}></TextInput>

      {/* <TouchableOpacity onPress={() => navigation.navigate('cart')} style={styles.containerin}>
        <Icon name="cart-plus" size={30} color='#5A5A5A' style={styles.myicon} />
      </TouchableOpacity> */}

    </View>

  </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '98%',
    marginTop: 10,
    marginLeft: '1%',
    // justifyContent: 'space-between',
    padding: 5,
    paddingLeft:10,
    alignItems: 'center',
    backgroundColor: colors.col1,
    elevation: 20,
    borderRadius: 30

  },
  // containerin: {
  //     flexDirection: 'row',
  //     alignItems: 'center',

  // },
  // myicon: {
  //     //color: colors.text1,
  //     paddingRight: 5,

  // },
  mytext: {
    color: colors.text1,
    fontSize: 20,
    fontFamily: "Itim-Regular",
    width: '50%',
    paddingLeft: 10,

  },
})

export default HomeHeadNav;