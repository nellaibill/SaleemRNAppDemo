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
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
const HomeScreen = () => {
  const navigation = useNavigation();
  //As Soon as the screen appears on the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setCategories(response.data);
    });
  };
  return (
    <SafeAreaView className="bg-white pt-10">
      <Header></Header>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-2">
          <TextInput
            className="flex-1"
            placeholder="What are you looking for?"
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
              key={category}
              title={category}
              description={category}
            ></FeaturedRow>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
