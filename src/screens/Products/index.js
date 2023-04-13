import { FlatList, View, BackHandler,} from "react-native";
import React, { useEffect, useState } from "react";
import ProductApi from "../../api/ProductApi";
import HomeHeadNav from '../../component/HomeHeadNav';
import CourseCard from '../../component/RenderItem';
import { useSelector } from "react-redux";
import { listEmptyComponent } from "../../component/EmptyList";
import { onBackPress } from '../../utils/backPressHandler';
import { handleBackPress } from "../../component/Alert";
import { styles } from "./index.style";
import BackHandling from "../../utils/BackHandling";


const Products = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const myCartItems = useSelector((state) => state.cart);
  console.log('added products in cart', myCartItems);

  // function handleBackPress() {
  //   // showAlert('Exit App', 'Do you want to exit the App?','BackHandler.exitApp()');
  //   BackHandler.exitApp();
  //   return true;
  // }

  useEffect(() => {
    onBackPress(handleBackPress);
  }, []);


  const courseCard = ({ item }) => {
    return <CourseCard item={item} />;
  };

  return (
    <View>
     
      <HomeHeadNav searchChange={() => ("")} search={search} />
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