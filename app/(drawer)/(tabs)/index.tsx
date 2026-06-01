import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text className="text-2xl font-[poppins-medium] self-center">
        Home Screen
      </Text>

      <Pressable onPress={() => router.push("/screens/categories")}>
        <Text className="text-lg font-[poppins-regular] ">Categories</Text>
      </Pressable>
    </View>
  );
};

export default Home;
