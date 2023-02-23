import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {removeFromCart, clearFromCart} from '../redux/action';
import { productList } from '../redux/productAction';

const CartScreen = ({navigation}) => {
       const result = useSelector((state)=>state.cartData);
       const dispatch = useDispatch();
       const product = {
        name:'I phone',
        type: 'mobile',
        price: 20000,
        color: 'red',
      }
  return (
    
    <View>
      <StatusBar />
      <Text> Items added to cart : {result.length} </Text>
       <Button title = "Remove" onPress={() => dispatch(removeFromCart(product))} />
       <Button title = "Clear" onPress={() => dispatch(clearFromCart())} />
       <Button title = "Get Product List" onPress={() => dispatch(productList())} />       
      
    </View>
  )
}



const styles = StyleSheet.create({})

export default CartScreen;