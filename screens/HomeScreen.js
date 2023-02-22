import { View, SafeAreaView, TextInput, ScrollView, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/productActions";
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const categories = useSelector((state) => state.allProducts.categories);

  return (
    <SafeAreaView className="bg-white pt-3">
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
