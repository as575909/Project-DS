import React, {useEffect} from 'react';
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/reducers/counterSlice';
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem, increaseQty } from "../redux/reducers/MyCartSlice";
import { btn1 } from '../globals/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import showAlert from '../component/Alert';
import EmptyCart from '../component/EmptyCart';
import Strings from '../statics/Strings';
import { onBackPress } from '../utils/backPressHandler';


const CartScreen = ({ navigation }) => {
  // const result = useSelector((state) => state.counter);
  const myCartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const AlertItem = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to clear the cart?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(deleteMyCartItem())},
      ],
      {cancelable: false},
    );
  };

  // const AlertItem = () => {
  //   showAlert('Delete', 'Are you sure you want to clear the cart?','dispatch(deleteMyCartItem())');
  // };


  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  }


  const courseCard = ({ item }) => {
    console.log(item, 'hi');
    return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.courseContainer}>
            <View>
              <Image
                style={styles.cardImage}
                // source={item.Image}
                source={{ uri: item.image }}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.mainHeader}>{item.title}</Text>
            <Text style={styles.mainHeader}>{item.price}</Text>


            <View style={styles.buttonContainer}>

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
                  onPress={() => dispatch(addProductToMyCart(item))}>
                  <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
              )} */}

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  if (item.qty > 1) {
                    dispatch(removeMyCartItem(item));
                  } else {
                    dispatch(deleteMyCartItem(item.id));

                  }
                }}>
                <Text style={styles.buttonText}> - </Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.qty}</Text>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { 
                dispatch(addProductToMyCart(item))
                
                }}>
                <Text style={styles.buttonText}> + </Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };


  return (

    <View>
      <StatusBar />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text> Items added to cart : {myCartItems.length} </Text>
        <TouchableOpacity onPress={AlertItem}>
          <FontAwesomeIcon name="trash" size={20} color="#00141a" />
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={myCartItems}
        renderItem={courseCard}
      />

      {myCartItems.length > 0 ? (<View style={styles.footer}>
        <View style={styles.total1}>
          <Text style={styles.total2}>
            {'Total:' + getTotal()}
          </Text>
        </View>
        <View style={styles.total1}>
          <TouchableOpacity style={btn1}>
            <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Check Out</Text>
          </TouchableOpacity>

        </View>

      </View>) : <EmptyCart style={{height: 600, backgroundColor: '#fff3b0'}} />}




    </View>
  )
}



const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  total1: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  total2: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginRight: 70,
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Kanit-Bold",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "Itim-Regular",
    textTransform: "capitalize",
  },
  qty: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },

})

export default CartScreen;