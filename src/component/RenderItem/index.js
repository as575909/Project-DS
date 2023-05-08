import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, removeMyCartItem, removeItem } from "../../redux/reducers/MyCartSlice";
import { styles } from './index.style';
import { CURRENCY_SYMBOLS } from '../../utils/currencySymbols';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";


const CourseCard = ({ item }) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const currencySymbol = CURRENCY_SYMBOLS['RUPEE'];
  const dispatch = useDispatch();
  const myCartItems = useSelector((state) => state.cart);
  const cartItem = myCartItems.find((cartItem) => cartItem.id === item.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { courseId: item.id })}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage} source={{ uri: item.image }} resizeMode="contain" />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.price}>{currencySymbol} {item.price}/-</Text>
          <View style={styles.buttonContainer}>
            {qty == 0 ? (
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  dispatch(addProductToMyCart(item));
                }}
              >
                <Text style={styles.buttonText}> {t("addtocart_btn")} </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    if (qty > 1) {
                      dispatch(removeMyCartItem(item));
                    } else {
                      dispatch(removeItem(item.id));
                    }
                  }}
                >
                  <Text style={styles.buttonText}> - </Text>
                </TouchableOpacity>

                <Text style={styles.zero}>{qty}</Text>

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    dispatch(addProductToMyCart(item));
                  }}
                >
                  <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};




export default CourseCard;
