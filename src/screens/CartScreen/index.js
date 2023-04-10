import React, {useEffect} from 'react';
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../redux/reducers/counterSlice';
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem, increaseQty } from "../../redux/reducers/MyCartSlice";
import { btn1 } from '../../globals/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import showAlert from '../../component/Alert';
import EmptyCart from '../../component/EmptyCart';
import Strings from '../../statics/Strings';
import { onBackPress } from '../../utils/backPressHandler';
import {styles} from './index.style';


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





export default CartScreen;