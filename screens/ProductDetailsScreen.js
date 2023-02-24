import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import BasketIcon from "../components/BasketIcon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SliderBox } from "@borgo-dev/react-native-image-slider-box";
import { fetchProductsById } from "../redux/actions/productActions";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let selectedItem = {};
  const {
    params: { id },
  } = useRoute();
  selectedItem = useSelector((state) => state.allProducts.selectedProduct);
  useEffect(() => {
    // dispatch(setRestaurant({ id, imgUrl, title, rating, description }));
    dispatch(fetchProductsById(id));
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemsToBasket = () => {
    let id = selectedItem.id;
    let title = selectedItem.title;
    let price = selectedItem.price;
    let description = selectedItem.description;
    let category = selectedItem.category;
    let image = selectedItem.thumbnail;
    dispatch(addToBasket({ id, title, price, description, category, image }));
  };

  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          {selectedItem?.images && (
            <SliderBox images={selectedItem?.images} sliderBoxHeight={500} />
          )}

          <Text></Text>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white"></View>
        <View className="flex-row">
          <View
            className="flex-1 pr-2 mt-4
          "
          >
            <Text className="text-black mt-2 ml-2">
              {selectedItem.description}
            </Text>
            <Text className="text-black mt-2 ml-2">
              {/* <Currency
                quantity={price}
                currency="INR" // Optional (USD by default)
                pattern="##,### !" // Optional
                decimal="," // Optional
                group="."
              /> */}
              Rs. {selectedItem.price}
            </Text>
          </View>
        </View>

        <View className="mt-2 ml-2">
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemsFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text className="pl-4 pr-4">{items.length}</Text>
            <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;
