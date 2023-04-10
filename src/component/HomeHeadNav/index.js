// import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import { styles } from './index.style';

// const HomeHeadNav = () => {
//   const navigation = useNavigation();
//   return (
  
//     <SafeAreaView>
//     <View style={styles.headNav}>
//       <TextInput placeholder='Search' style={styles.mytext}></TextInput>
//     </View>

//   </SafeAreaView>
//   );
// };


// export default HomeHeadNav;





import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export const HomeHeadNav = ({ productList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);

    const results = productList.filter((product) =>
      product.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      <View style={styles.resultsContainer}>
        {searchResults.map((result) => (
          <Text style={styles.resultItem} key={result}>
            {result}
          </Text>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  searchInput: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 8,
    paddingLeft: 16,
  },
  resultsContainer: {
    position: 'absolute',
    top: 72,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    zIndex: 1,
  },
  resultItem: {
    padding: 8,
  },
});




// import React from 'react';
// import { View, Text } from 'react-native';
// import Header from './Header';

// const ProductList = () => {
//   const products = ['Product 1', 'Product 2', 'Product 3'];

//   return (
//     <View>
//       <Header productList={products} />
//       <View>
//         {products.map((product) =>



