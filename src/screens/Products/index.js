import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductApi from "../../api/ProductApi";
import HomeHeadNav from '../../component/HomeHeadNav';
import { useDispatch, useSelector } from "react-redux";
import { increaseQty } from '../../redux/reducers/counterSlice';
import { addProductToMyCart, removeMyCartItem, removeItem } from "../../redux/reducers/MyCartSlice";
import colors from "../../statics/styles/colors";
import { listEmptyComponent } from "../../component/emptyList";
import DrawerNav from "../../Navigation/DrawerNav";
import { onBackPress } from '../../utils/backPressHandler';
//import { handleBackPress } from "../../component/Alert";
import showAlert from '../../component/Alert';
import { styles } from "./index.style";
import QtyMng from "../../component/QtyMngment";

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const result = useSelector((state) => state.counter);
  const myCartItems = useSelector((state) => state.cart);
  console.log('added products in cart', myCartItems);

  function handleBackPress() {
    // showAlert('Exit App', 'Do you want to exit the App?','BackHandler.exitApp()');
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    onBackPress(handleBackPress);
  }, []);

  const courseCard = ({ item }) => {

    const cartItem = myCartItems.find((cartItem) => cartItem.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;

    return (
      <View>
        <SafeAreaView>
          <View style={styles.mainContainer}>

            <TouchableOpacity
              // style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  courseId: item.id,
                })
              }>
              <View style={styles.courseContainer}>
                <View>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.mainHeader}>{item.title}</Text>
                <Text style={styles.price}> ₹ {item.price}/- </Text>
                {/* <Text style={styles.description}>{item.description}</Text> */}

                <View style={styles.buttonContainer}>

                  {qty == 0 ? (<TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                      dispatch(addProductToMyCart(item));
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
                  </View>}
                  


                </View>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  };

  return (
    <View>
      <HomeHeadNav
        searchChange={() => ("")}
        search={search}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={ProductApi}
        renderItem={courseCard}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};



export default Products;