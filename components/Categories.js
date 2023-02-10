import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
const dummyCategories = [
  {
    id: "1",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg",
    title: "Briyani",
  },
  {
    id: "2",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1",
    title: "Testing 2",
  },
  {
    id: "3",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv",
    title: "Testing 3",
  },
  {
    id: "4",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx",
    title: "Testing 3",
  },
  {
    id: "5",
    imgUrl:
      " https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ee5ynhqgyhwdoukilzfu",
    title: "Testing 3",
  },
];
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {dummyCategories.map((category) => {
        return (
          <CategoryCard
            key={category.id}
            imgUrl={category.imgUrl}
            title={category.title}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
