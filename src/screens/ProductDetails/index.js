import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import ProductApi from "../../api/ProductApi";
import { increment } from "../../redux/reducers/counterSlice";
import { addProductToMyCart, removeMyCartItem, removeItem } from "../../redux/reducers/MyCartSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../statics/styles/colors";
import { styles } from "./index.style";
import QtyMng from "../../component/QtyMngment";
import { CURRENCY_SYMBOLS } from '../../utils/currencySymbols';



const ProductDetails = ({ navigation, route }) => {

  const currencySymbol = CURRENCY_SYMBOLS['RUPEE'];
  const myCartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const id = route.params.courseId;
  console.log(id, 'product detail');

  const item = ProductApi.find((element) => {
    return id === element.id;
  });

  const cartItem = myCartItems.find((cartItem) => cartItem.id === item.id);
  const qty = cartItem ? cartItem.qty : 0;


  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={{ uri: item.image }}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.description}>
            <Text style={styles.subCourse}>
              Price: {currencySymbol}{item.price.toFixed(2)}/-
            </Text>
            <Text> Rating: {item.rating.rate} </Text>
            <Text style={styles.subCourse}>
              ({item.rating.count} reviews)
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            {qty == 0 ? (<TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                {
                  dispatch(addProductToMyCart(item))
                  dispatch(increment(item.id))
                }
              }}>
              <Text style={styles.buttonText}> Add to Cart </Text>
            </TouchableOpacity>) : 
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
            }  

          </View>

        </View>
      </View>
    </ScrollView>
  );
};


export default ProductDetails;