import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, MapIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ id, imgUrl, title, rating, description, brand }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("productDetails", {
          id,
        });
      }}
      className="bg-white mr-3 shadow-sm"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold pt-2">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text>{rating}</Text>
        <Text>{brand}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
