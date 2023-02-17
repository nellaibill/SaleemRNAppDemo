import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, title, price, description, category, image }));
  };

  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={
          'bg-white border p-4  border-gray-200 ${isPressed && " border-gray-200 border-b-0"}'
        }
      >
        <View className="bg-white">
          {/* <View>
            <Text className="text-lg font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.4} size={22} />
                <Text>{rating}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="green" opacity={0.4} size={22} />
                <Text>Near by Nellai</Text>
              </View>
            </View>
          </View> */}
        </View>
        <View className="flex-row">
          <View className="flex-1 pr-2 mt-4
          ">
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2 ml-2">
              {/* <Currency
                quantity={price}
                currency="INR" // Optional (USD by default)
                pattern="##,### !" // Optional
                decimal="," // Optional
                group="."
              /> */}
              Rs. {price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemsFromBasket}
          >
            <MinusCircleIcon
              size={40}
              color={items.length > 0 ? "#00CCBB" : "gray"}
            />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemsToBasket}>
            <PlusCircleIcon size={40} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DishRow;
