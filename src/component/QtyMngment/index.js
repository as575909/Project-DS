import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem } from "../../redux/reducers/MyCartSlice";

const QtyMng = ({item}) => {
  // const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const myCartItems = useSelector((state) => state.cart);

  const cartItem = myCartItems.find((cartItem) => cartItem.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;

  const handleIncrementQuantity = () => {
    dispatch(addProductToMyCart(item))
    
  };

  const handleDecrementQuantity = () => {
    if (qty > 1) {
      dispatch(removeMyCartItem(item));
    } else {
      dispatch(deleteMyCartItem(item.id));

    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="-" onPress={handleDecrementQuantity} />
        <Text style={{ marginHorizontal: 10 }}>{qty}</Text>
        <Button title="+" onPress={handleIncrementQuantity} />
      </View>
     
    </View>
  );
};

export default QtyMng;
