import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    // removing file header and footer
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
