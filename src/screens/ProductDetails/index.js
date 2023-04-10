import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import ProductApi from "../../api/ProductApi";
import { increment } from "../../redux/reducers/counterSlice";
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem } from "../../redux/reducers/MyCartSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../statics/styles/colors";
import { increaseQty } from "../../redux/reducers/MyCartSlice";
import { styles } from "./index.style";
import QtyMng from "../../component/QtyMngment";



const ProductDetails = ({ navigation, route }) => {
  const myCartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const id = route.params.courseId;
  console.log(id,'product detail');

  const item = ProductApi.find((element) => {
    return id === element.id;
  });


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
              Price: ₹ {item.price.toFixed(2)}/-
            </Text>
            <Text> Rating: {item.rating.rate} </Text>
            <Text style={styles.subCourse}>
              ({item.rating.count} reviews)
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            {item.qty == 0 ? (<TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {{
              dispatch(addProductToMyCart(item))
              dispatch(increment(item.id))
              }}}>
              <Text style={styles.buttonText}> Add to Cart </Text>
            </TouchableOpacity>) : <QtyMng />}

            {/* {item.qty == 0 ? null : (<TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                if (item.qty > 1) {
                  dispatch(removeMyCartItem(item));
                } else {
                  dispatch(deleteMyCartItem(item.id));

                }
              }}>
              <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>)}


            {item.qty == 0 ? null : (
              <Text style={styles.qty}>{item.qty}</Text>
            )}

            {item.qty == 0 ? null : (
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  dispatch(addProductToMyCart(item))
                  dispatch(increment(item.id))
                }}>
                <Text style={styles.buttonText}> + </Text>
              </TouchableOpacity>
            )} */}

          </View>

        </View>
      </View>
    </ScrollView>
  );
};


export default ProductDetails;