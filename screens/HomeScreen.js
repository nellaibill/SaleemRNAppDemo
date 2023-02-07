import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "react-native-heroicons/solid";

const HomeScreen = () => {
  const navigation = useNavigation();
  //As Soon as the screen appears on the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-10">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text>
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />{" "}
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
          <MagnifyingGlassIcon size="20" color="gray" />
          <TextInput placeholder="Search Services" keyboardType="default" />
        </View>
        <FunnelIcon size={20} color="#00CCBB" />
      </View>
    </SafeAreaView>
  ); 
};

export default HomeScreen;
