import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: { id, imgUrl, title, rating, description },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: imgUrl }}
          className="w-full h-56 bg-gray-300 p-4"
        />
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <View className="bg-white">
        <Text className="text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon color="green" opacity={0.4} size={22} />
          <Text>{rating}</Text>
        </View>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity>
        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
        <Text>Have a food Allergy?</Text>
        <ChevronRightIcon color="#00CCBB" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RestaurantScreen;
