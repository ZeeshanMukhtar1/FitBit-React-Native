import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

export default function index() {
  return (
    <View className="justify-end flex-1">
      <StatusBar style="light" />
      <Image
        className="absolute w-full h-full"
        source={require('../assets/images/welcome.png')}
      />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{
          width: wp('100'), // 100% of width device screen
          height: hp('70'), // 70% of height device screen
          start: { x: 0.5, y: 0 },
          end: { x: 0, y: 0.8 },
        }}
        className="justify-end flex-1 pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{
              fontSize: hp('5'),
            }}
            className="font-bold tracking-wide text-white"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{
              fontSize: hp('5'),
            }}
            className="font-bold tracking-wide text-white"
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            style={{
              height: hp('7'),
              width: wp('80'),
            }}
            className="items-center justify-center mx-auto border-2 rounded-full bg-rose-500 border-neutral-200 "
          >
            <Text
              style={{
                fontSize: hp('3'),
              }}
              className="text-white"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
