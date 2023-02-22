import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, MapIcon, MapPinIcon } from "react-native-heroicons/solid";
const ProductsScreen = () => {
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  console.log("products", products);
  return (
    <View>
      {products?.map((product) => {
        return (
          <TouchableOpacity
            key={product.id}
            className="bg-white mr-3 shadow-sm"
          >
            <Image
              source={{
                uri: product.image,
              }}
              className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
              <Text className="text-lg font-bold pt-2">{product.title}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text>{product.category}</Text>
              <Text>{product.category}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProductsScreen;
