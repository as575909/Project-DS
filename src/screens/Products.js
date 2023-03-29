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
import React, {useEffect} from "react";
import ProductApi from "../api/ProductApi";
import HomeHeadNav from '../component/HomeHeadNav';
import { useDispatch, useSelector } from "react-redux";
import { increment } from '../redux/reducers/counterSlice';
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem } from "../redux/reducers/MyCartSlice";
import {moderateScale} from 'react-native-size-matters';
import colors from "../statics/styles/colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { listEmptyComponent } from "../component/emptyList";
import DrawerNav from "../Navigation/DrawerNav";
import {onBackPress} from '../utils/backPressHandler';
import { handleBackPress } from "../component/Alert";
import showAlert from '../component/Alert';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.counter);
  const myCartItems = useSelector((state) => state.cart);
  console.log('added products in cart',myCartItems);

  // function handleBackPress() {
  //   showAlert('Exit App', 'Do you want to exit the App?','BackHandler.exitApp()');
  //  // BackHandler.exitApp();
  //   return true;
  // }
  
  useEffect(() => {
    onBackPress(handleBackPress);
  }, []);

  const courseCard = ({ item }) => {  
    return (
      <SafeAreaView>
      
      
        <View style={styles.mainContainer}>
        {/* <HomeHeadNav /> */}
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
                source={{uri: item.image}}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.mainHeader}>{item.title}</Text>
            <Text style={styles.price}> ₹ {item.price}/- </Text>
            {/* <Text style={styles.description}>{item.description}</Text> */}

            <View style={styles.buttonContainer}>
              
              {item.qty == 0 ? (<TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => dispatch(addProductToMyCart(item))}>
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
                }}
                >
                <Text style={styles.buttonText}> - </Text>
              </TouchableOpacity>)}

              {item.qty == 0 ? null : (
                <Text style={styles.zero}>{item.qty}</Text>
              )}

              {item.qty == 0 ? null : (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => { 
                    dispatch(addProductToMyCart(item))
                    
                    }}
                  >
                  <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
    {/* <HomeHeadNav /> */}
    <FlatList
      keyExtractor={(item) => item.id}
      data={ProductApi}
      renderItem={courseCard}
      ListEmptyComponent={listEmptyComponent}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: moderateScale(1),
    borderRadius: moderateScale(50),
  },
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
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    textTransform: "uppercase",
    paddingTop: moderateScale(10),
    // fontWeight: 500,
    paddingBottom: moderateScale(15),
    textAlign: "center",
    fontFamily: "Kanit-Bold",
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
  zero: {
    marginLeft: moderateScale(10), 
    fontSize: moderateScale(16), 
    fontWeight: '600',
  },
  price: {
      textTransform: "uppercase",
      color: "#344055",
      fontFamily: "Itim-Regular",
      textAlign: "center",
      fontSize: moderateScale(20),
      paddingBottom: moderateScale(15),
      alignItems: "center",
  },
});

export default Products;