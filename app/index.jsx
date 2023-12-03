import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View className="text-3xl text-center text-white bg-green-500 mx-11 px-11">
      <TouchableOpacity>
        <Text className="mx-12 my-4 text-center text-white ">Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
