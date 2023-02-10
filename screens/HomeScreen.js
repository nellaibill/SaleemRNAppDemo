import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  //As Soon as the screen appears on the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const categories = [
    { id: "1", title: "Tasty Discounts", description: "Tasty Discounts" },
    { id: "2", title: "Offers", description: "Offers Near by you" },
    { id: "3", title: "Japan", description: "Tokyo" },
  ];

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
          <TextInput
            placeholder="Search for restaurant,item or more"
            keyboardType="default"
          />
          <MagnifyingGlassIcon size="20" color="gray" />
        </View>
      </View>
      <ScrollView>
        <Categories></Categories>
        {categories?.map((category) => {
          return (
            <FeaturedRow
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
            ></FeaturedRow>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
