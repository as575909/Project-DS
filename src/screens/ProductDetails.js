import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import ProductApi from "../api/ProductApi";
import { increment } from "../redux/reducers/counterSlice";
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem } from "../redux/reducers/MyCartSlice";
import { moderateScale } from 'react-native-size-matters';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from "react-redux";
import colors from "../statics/styles/colors";
import { increaseQty } from "../redux/reducers/MyCartSlice";


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
            </TouchableOpacity>) : null}

            {item.qty == 0 ? null : (<TouchableOpacity
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
            )}

          </View>

        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: moderateScale(20),
  },
  courseContainer: {
    padding: moderateScale(30),
    backgroundColor: colors.cardBgColor,
    textAlign: "center",
    borderRadius: moderateScale(5),
    shadowColor: colors.text2,
    shadowOffset: { width: moderateScale(0), height: moderateScale(0) },
    shadowOpacity: moderateScale(0.5),
    shadowRadius: moderateScale(8),
    elevation: moderateScale(8),
    marginVertical: moderateScale(30),
  },

  cardImage: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: moderateScale(1.5),
    borderRadius: moderateScale(5),
  },

  mainHeader: {
    fontSize: responsiveFontSize(3),
    color: colors.primary,
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(10),
    fontFamily: "Itim-Regular",
    textAlign: "center",
  },


  description: {
    textAlign: "center",
    fontSize: responsiveFontSize(2),
    color: colors.text3,
    paddingBottom: moderateScale(20),
    fontFamily: "Itim-Regular",
    lineHeight: moderateScale(20),
    alignItems: 'center',
  },
  subCourse: {
    textTransform: "uppercase",
    color: colors.primary,
    fontFamily: "Itim-Regular",
    fontSize: responsiveFontSize(2),
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

  },
  buttonStyle: {
    backgroundColor: colors.btnBgColor,
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(15),
  },
  buttonText: {
    fontSize: moderateScale(18),
    color: colors.col1,
    fontFamily: "Itim-Regular",
    textTransform: "capitalize",
  },
  qty: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  }
});

export default ProductDetails;