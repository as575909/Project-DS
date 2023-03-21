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

import {getFakeProducts} from '../api/Axios';
import {colors} from '../globals/style';

const Product = () => {
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [loading, setLoading] = useState(true); // added `loading` state

  //data from API -> Axios

  const getAPIdata = async () => {
    try {
      const data = await getFakeProducts();
      setData(data);
      setLoading(false);
    } catch (error) {
      // 
      console.log('hi', error);
    }
    // } finally {
    //   setLoading(false);
    // }
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
    shadowColor: colors.text2,
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
      color: colors.text1,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  },
  description: {
    fontSize: 16,
    color: colors.text1,
    marginBottom: 10,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#335c67',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: colors.col1,
    fontSize: 16,
  },
});

export default Product;