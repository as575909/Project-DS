import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addProductToMyCart, removeMyCartItem, removeItem } from "../../redux/reducers/MyCartSlice";
import { styles } from './index.style';

const QtyMng = ({item}) => {
  // const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const myCartItems = useSelector((state) => state.cart);

  const cartItem = myCartItems.find((cartItem) => cartItem.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;


  return (
    <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  if (qty > 1) {
                    dispatch(removeMyCartItem(item));
                  } else {
                    dispatch(removeItem(item.id));
                  }
                }}>
                <Text style={styles.buttonText}> - </Text>
              </TouchableOpacity>

              <Text style={styles.zero}>{qty}</Text>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  dispatch(addProductToMyCart(item))

                }}>
                <Text style={styles.buttonText}> + </Text>
              </TouchableOpacity>
            </View>
  );
};

export default QtyMng;
