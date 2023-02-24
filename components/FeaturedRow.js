import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
const FeaturedRow = ({ title }) => {
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
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              imgUrl={product.thumbnail}
              rating={product.rating}
              description={product.description}
              brand={product.brand}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
