import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import ProductDetail from "../components/ProductDetail";
import BasketIcon from "../components/BasketIcon";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
import { useState } from "react";
import axios from "axios";
import { SliderBox } from "@borgo-dev/react-native-image-slider-box";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [productImages, setproductImages] = useState([]);

  const {
    params: { id, imgUrl, title, rating, description },
  } = useRoute();
  useEffect(() => {
    dispatch(setRestaurant({ id, imgUrl, title, rating, description }));
  }, [dispatch]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axios.get("https://dummyjson.com/products/" + id).then((response) => {
      setProducts(response.data);
      setproductImages(response.data.images);
    });
  };

  const test = products.images;
  console.log(test);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  console.log("images", description);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <SliderBox images={productImages} sliderBoxHeight={400} />

          <Text></Text>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <ProductDetail
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
            category={products.category}
            image={products.thumbnail}
            rating={products.rating}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
