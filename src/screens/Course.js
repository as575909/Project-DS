import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Courses from "../api/Course";
import HomeHeadNav from '../component/HomeHeadNav';
import { useDispatch, useSelector } from "react-redux";
import { increment } from '../features/counter/counterSlice';
import { addProductToMyCart } from "../features/counter/MyCartSlice";



const Course = ({ navigation }) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.counter);
  const myCartItems = useSelector((state) => state.cart);
  console.log('added products in cart',myCartItems);


  const courseCard = ({ item }) => {  
    return (
      <SafeAreaView>
       {/* <HomeHeadNav /> */}

        <View style={styles.mainContainer}>
          <View style={styles.courseContainer}>
            <View>
              <Image
                style={styles.cardImage}
                source={{uri: item.image}}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.mainHeader}>{item.title}</Text>

            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() =>
                  navigation.navigate("CourseDetails", {
                    courseId: item.id,
                  })
                }>
                <Text style={styles.buttonText}> Product Details </Text>

              </TouchableOpacity>

              {item.qty == 0 ? (<TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => dispatch(addProductToMyCart(item))}>
                <Text style={styles.buttonText}> Add to Cart </Text>
              </TouchableOpacity>) : null}

              {item.qty == 0 ? null : (<TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}> - </Text>
              </TouchableOpacity>)}

              {item.qty == 0 ? null : (
                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>{'0'}</Text>
              )}

              {item.qty == 0 ? null : (
                <TouchableOpacity
                  style={styles.buttonStyle}>
                  <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
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
  description: {
    textAlign: "left",
    fontFamily: "Itim-Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
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
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "Itim-Regular",
    textTransform: "capitalize",
  },
});

export default Course;