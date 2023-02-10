import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, MapIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ id, imgUrl, title, rating,description }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", { id, imgUrl, title, rating,description});
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
        <Text>Vegetarian </Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <MapPinIcon color="gray" opacity={0.4} size={22} />
        <Text>{rating}</Text>
        <Text>Near by Nellai</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
