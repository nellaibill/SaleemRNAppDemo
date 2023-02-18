import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketItems } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { XCircleIcon,ShoppingCartIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white mt-20">
      <View>
        <View className="p-5 border-b bg-white shadow-x5">
          <View>
            <Text className="text-lg text-center font-bold">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        {items.length == 0 && (
          <View className="flex-row items-center pl-5">
            <View>
              <ShoppingCartIcon color="#00CCBB" height={100} width={100} />
            </View>
            <Text>There are no items added in your cart !</Text>
          </View>
        )}
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text>{items.length}x</Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1  text-gray-600 w-32">
                {items[0]?.title}
              </Text>
              <Text className="">{items[0]?.price}</Text>
              <TouchableOpacity
                onPress={() =>
                  dispatch(removeFromBasket({ id: parseInt(key) }))
                }
              >
                <Text className="text-xs text-[#00CCBB]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
