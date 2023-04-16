import React, { useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, Image, TouchableOpacity, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart, removeMyCartItem, deleteMyCartItem, removeItem } from "../../redux/reducers/MyCartSlice";
import { btn1 } from '../../globals/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EmptyCart from '../../component/EmptyCart';
import Strings from '../../statics/Strings';
import { styles } from './index.style';
import HomeHeadNav from '../../component/HomeHeadNav';
import { CURRENCY_SYMBOLS } from '../../utils/currencySymbols';
import { listEmptyComponent } from "../../component/EmptyList";


const CartScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const myCartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const currencySymbol = CURRENCY_SYMBOLS['RUPEE'];

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
        { text: 'OK', onPress: () => dispatch(deleteMyCartItem()) },
      ],
      { cancelable: false },
    );
  };


  const getTotal = () => {
    let newTotal = 0;
    myCartItems.map(item => {
      newTotal = newTotal + item.qty * item.price;
      total = newTotal.toFixed(2);
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
            <Text style={styles.mainHeader}>{currencySymbol}{item.price}/-</Text>


            <View style={styles.buttonContainer}>


              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  if (item.qty > 1) {
                    dispatch(removeMyCartItem(item));
                  } else {
                    dispatch(removeItem(item.id));

                  }
                }}>
                <Text style={styles.buttonText}> - </Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.qty}</Text>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  dispatch(addProductToMyCart(item));
                  // dispatch(increaseQty(item.id));
                }}>
                <Text style={styles.buttonText}> + </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => dispatch(removeItem(item.id))}>
                <Text style={{ color: 'white', marginTop: 5 }}>Delete</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };


  return (

    <View style={{ flex: 1 }}>

      <HomeHeadNav
        searchChange={() => ("")}
        search={search}
      />
      <ScrollView>

        {myCartItems.length > 0 ? (
          <View>

            <View style={styles.headContainer}>
              <Text style={styles.textHead}> Items added to cart : {myCartItems.length} </Text>
              <TouchableOpacity onPress={AlertItem}>
                <FontAwesomeIcon name="trash" size={20} color="#00141a" />
              </TouchableOpacity>
            </View>

            <FlatList
              keyExtractor={(item) => item.id}
              data={myCartItems}
              renderItem={courseCard}
              ListEmptyComponent={listEmptyComponent}
            />

            <View style={styles.footer}>
              <View style={styles.total1}>
                <Text style={styles.total2}>
                  {'Total:  ₹' + getTotal()}
                </Text>
              </View>
              <View style={styles.total1}>
                <TouchableOpacity style={btn1}>
                  <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Check Out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : <EmptyCart style={{ height: 600, backgroundColor: '#fff3b0' }} />}


      </ScrollView>

    </View>
  )
}





export default CartScreen;