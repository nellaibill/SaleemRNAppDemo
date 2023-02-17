import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axios
      .get("https://dummyjson.com/products/category/" + title)
      .then((response) => {
        setProducts(response.data.products);
      });
  };
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lgr">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Text>
        <ArrowRightIcon color="pink" />
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((restaurant) => {
          return (
            <ProductCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              imgUrl={restaurant.thumbnail}
              rating={restaurant.rating}
              description={restaurant.description}
              brand={restaurant.brand}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
