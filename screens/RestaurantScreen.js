import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import ProductDetail from "../components/ProductDetail";
import BasketIcon from "../components/BasketIcon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
import { useState } from "react";
import { SliderBox } from "@borgo-dev/react-native-image-slider-box";
import { fetchProductsById } from "../redux/actions/productActions";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productImages, setproductImages] = useState([]);
  const {
    params: { id, imgUrl, title, rating, description },
  } = useRoute();
  const products = useSelector((state) => state.allProducts.selectedProduct);
  console.log("selectedProduct", products);
  useEffect(() => {
    dispatch(setRestaurant({ id, imgUrl, title, rating, description }));
    dispatch(fetchProductsById(id));
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          {products?.images && (
            <SliderBox images={products?.images} sliderBoxHeight={400} />
          )}

          <Text></Text>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        {products && (
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
        )}
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
