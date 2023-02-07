import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lgr">{title}</Text>
        <ArrowRightIcon color="pink" />
      </View>
      <Text className="text-xs text-gray-500 px-4"> {description}</Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
        <RestaurantCard
          id="1"
          title="Aruvi Bakery and Sweets"
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f54f36e686096c23560c6561c43a0461"
          rating={4.5}
        />
        <RestaurantCard
          id="2"
          title="Annapoorna Hotel"
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a6cnuqirisuqloxdwvhp"
          rating={4.5}
        />
        <RestaurantCard
          id="3"
          title="Dindigul Thalappakatti"
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bkjibtgotmkpwmustjs8"
          rating={4.5}
        />
        <RestaurantCard
          id="4"
          title="test1"
          imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ee5ynhqgyhwdoukilzfu"
          rating={4.5}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
