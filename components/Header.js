import { View, Text, Image } from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/solid";
const Header = () => {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image
        source={require("../assets/logo.png")}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />

      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Shopping Cart</Text>
        <Text>
          Current Location <ChevronDownIcon size={20} color="#00CCBB" />{" "}
        </Text>
      </View>
      <UserIcon size={35} color="#00CCBB" />
    </View>
  );
};

export default Header;
