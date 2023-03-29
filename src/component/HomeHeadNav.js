import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../globals/style';
import { useNavigation } from '@react-navigation/native';
import styles from '../statics/styles';

const HomeHeadNav = () => {
  const navigation = useNavigation();
  return (
  
    <SafeAreaView>
    <View style={styles.headNav}>
      <TextInput placeholder='Search' style={styles.mytext}></TextInput>
    </View>

  </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   headNav: {
//     flexDirection: 'row',
//     width: '98%',
//     marginTop: 10,
//     marginLeft: '1%',
//     // justifyContent: 'space-between',
//     padding: 5,
//     paddingLeft:10,
//     alignItems: 'center',
//     backgroundColor: colors.col1,
//     elevation: 20,
//     borderRadius: 30

//   },

//   mytext: {
//     color: colors.text1,
//     fontSize: 20,
//     fontFamily: "Itim-Regular",
//     width: '50%',
//     paddingLeft: 10,

//   },
// })

export default HomeHeadNav;