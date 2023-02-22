import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/productActions";
const CategoriesScreen = () => {
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allProducts.categories);
  return (
    <View>
      {/* <Categories></Categories> */}
      <ScrollView className="pb-50">
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
    </View>
  );
};

export default CategoriesScreen;
