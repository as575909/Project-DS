import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { styles } from './index.style';
import CartScreen from '../../screens/CartScreen';

const HomeHeadNav = (props) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    console.log("open drawer");
    navigation.dispatch(DrawerActions.openDrawer());
  };

  // const openCartScreen = () => {
  //   navigation.navigate(CartScreen);
  // };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Ionicons name="md-menu" size={32} color="#fff" />
      </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={props.searchChange}
              value={props.search}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
            />
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate('Mycart')}>
        <Ionicons name="md-cart" size={32} color="#fff" />
      </TouchableOpacity>
      
    </View>
  );
};



export default HomeHeadNav;

