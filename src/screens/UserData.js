// import { View, Text, FlatList, StyleSheet, Image } from "react-native";
// import React, { useState, useEffect } from "react";
// import Axios from '../../src/api/Axios';

// const UserData = () => {
//   const [isError, setIsError] = useState(true);
//   const [myData, setMyData] = useState([]);

//   const getUserData = async () => {
//     try {
//       const response = await Axios.get(
//         "/userapi/users.json"
//       );
//       setMyData(response.data);
//       // console.log(realData);
//     } catch (error) {
//      setIsError(error.message);
//     }
//   };

//   useEffect(() => { getUserData(); }, []);

//   // render the students cards
//   const showUserData = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <View style={styles.imgContainer}>
//           <Image style={styles.imgStyle} source={{ uri: item.image }} />
//         </View>

//         <View>
//           <View style={styles.bioDataContainer}>
//             <Text style={styles.bioData}> Bio-Data </Text>
//             <Text style={styles.idNumber}>
//               {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
//             </Text>
//           </View>

//           <View style={styles.mainContain}>
//             <Text style={styles.myName}> Name: {item.name} </Text>
//             <Text style={styles.myName}> email: {item.email} </Text>
//             <Text style={styles.myName}> mobile: {item.mobile} </Text>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View>
//       <Text style={styles.mainHeader}>List of Students</Text>
//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={myData}
//         renderItem={showUserData}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     width: "100%",
//     minHeight: "100%",
//     paddingVertical: 50,
//     backgroundColor: "#ebedee",
//   },
//   card: {
//     width: 250,
//     // height: 350,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     marginHorizontal: 20,
//   },
//   bioDataContainer: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#353535",
//     paddingVertical: 10,
//     fontFamily: "Itim-Regular",
//   },
//   idNumber: {
//     fontSize: 20,
//     color: "rgba(255, 255, 255, 0.5)",
//     fontFamily: "Itim-Regular",
//     paddingRight: 10,
//   },
//   bioData: {
//     fontSize: 30,
//     color: "#fff",
//     fontFamily: "Itim-Regular",
//   },
//   mainHeader: {
//     fontSize: 30,
//     color: "#a18ce5",
//     textAlign: "center",
//     fontFamily: "Itim-Regular",
//     paddingVertical: 50,
//   },
//   imgContainer: {
//     padding: 10,
//   },
//   imgStyle: {
//     width: "100%",
//     height: 180,
//   },
//   mainContain: {
//     padding: 10,
//     backgroundColor: "#353535",
//     borderBottomLeftRadius: 5,
//     borderBottomRightRadius: 5,
//     paddingBottom: 20,
//   },
//   myName: {
//     fontSize: 14,
//     color: "#fff",
//     marginBottom: 10,
//     alignSelf: "flex-start",
//     textTransform: "capitalize",
//     fontFamily: "Itim-Regular",
//   },
// });

// export default UserData;


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';

// import {addToCart} from '../redux/CartSlice';
import { addProductToMyCart } from "../features/counter/MyCartSlice";
import {useDispatch, useSelector} from 'react-redux';

import API from '../api/Axios';
import {Colors} from '../../assets/colors';

const Product = () => {
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [loading, setLoading] = useState(true); // added `loading` state

  //data from API -> Axios

  const getAPIdata = async () => {
    try {
      const res = await API.get('/products');
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Condiotional Rendering */}

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id.toString()}
            renderItem={({item}) => (
              <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{item.title}</Text>

                  <View style={styles.rar}>
                    <Text style={styles.par}>
                      Price: ${item.price.toFixed(2)}
                    </Text>
                    <Text> Rating: {item.rating.rate} </Text>
                    <Text style={styles.par}>
                      ({item.rating.count} reviews)
                    </Text>
                  </View>

                  {/* Dispatching Action  */}
                  <Button
                    style={styles.buttonText}
                    title="Add to Cart"
                    onPress={() => dispatch(addProductToMyCart(item))}
                  />

                  {showDescription && (
                    <Text style={styles.description}>{item.description}</Text>
                  )}
                  {/* Toggle - LifeCycle Method */}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowDescription(!showDescription)}>
                    <Text style={styles.buttonText}>
                      {showDescription ? 'Hide' : 'Show'} Description
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    marginHorizontal: 2,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: Colors.bg_light,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  rar: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    par: {
      color: Colors.text,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 10,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: Colors.btn,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: Colors.text,
    fontSize: 16,
  },
});

export default Product;