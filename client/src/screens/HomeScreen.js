import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { Search } from "react-native-feather";
import { MapPin } from "react-native-feather";
import { Sliders } from "react-native-feather";
import { themeColors } from "../theme/index.js";
import Categories from "../components/Categories.js";
import { featured } from "../constants/index.js";
import FeaturedRow from "../components/FeaturedRow.js";
import { getFeaturedRestaurants } from "../../api.js";

const HomeScreen = () => {

  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedRestaurants(data);
    })
  },[]);

  return (
    <SafeAreaView className="bg-white mb-10">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Search for products..."
            className="ml-2 flex-1"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300">
            <MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 bg-gray-300 rounded-full"
        >
          <Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>

      {/*main*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/*categories*/}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {featuredRestaurants.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.name}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
