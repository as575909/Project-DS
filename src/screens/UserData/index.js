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

import { addProductToMyCart } from "../../redux/reducers/MyCartSlice";
import {useDispatch, useSelector} from 'react-redux';
import {getFakeProducts} from '../../api/Axios';
import {styles} from './index.style'
import { listEmptyComponent } from '../../component/EmptyList';

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
            ListEmptyComponent={listEmptyComponent}
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



export default Product;